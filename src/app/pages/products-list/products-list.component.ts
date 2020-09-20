import {HttpClient} from '@angular/common/http';
import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import captureVideoFrame from 'capture-video-frame';
import {of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Product} from '../../types/migros-product.type';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, AfterViewInit, OnDestroy {
  loading: boolean = true;
  products: Product[] = [];
  blindMode: boolean;
  private intervalId: number;

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  @ViewChild('video') videoElementRef: ElementRef;


  async ngOnInit(): Promise<void> {

    this.blindMode = localStorage.getItem(environment.blindMode) === 'true';

    if (history.state.file !== undefined) {
      const file = history.state.file;
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      const endpoint = `${environment.apiUrl}/product/upload`;

      this.httpClient
        .post<Product[]>(endpoint, formData)
        .pipe(
          catchError((err => {
            console.error(err);
            this.router.navigate(['/']);
            return of([]);
          })))
        .subscribe((data) => {
          this.loading = false;
          this.products = data;
        });
    } else if (this.blindMode) {
      this.intervalId = setInterval(() => {

        const frame = captureVideoFrame(this.videoElementRef.nativeElement, 'png');

        const formData = new FormData();
        formData.append('file', frame.blob, `screen.${frame.format}`);

        this.httpClient.post(`${environment.apiUrl}/product/upload/speech`, formData).subscribe(async (responses: { fileId: string, productId: string }[]) => {
          console.log(responses);
          for (const response of responses) {
            console.log(response);
            const audio = new Audio(`${environment.apiUrl}/${response.fileId}.mp3`);
            await audio.play();
            await new Promise(res => audio.onended = res);
          }

        });
      }, 25000);
    } else {
      this.router.navigate(['/']);
    }
  }

  ngAfterViewInit(): void {
    if (this.blindMode) {
      navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment'
        }, audio: false
      })
        .then((stream) => {
          const video = this.videoElementRef.nativeElement;
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.log('An error occurred: ' + err);
        });
    }
  }

  ngOnDestroy(): void {
    if (this.blindMode) {

      clearInterval(this.intervalId);
    }
  }

}
