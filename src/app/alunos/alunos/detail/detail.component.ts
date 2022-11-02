import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(private service: AlunoService) {}

  ngOnInit() {
    this.service.subject_ok
      .pipe(
        tap((item) => console.log('DetailComponent ', item)),
        filter((item) => item)
      )
      .subscribe((resp) => {
        console.log('resp Detail', resp);
        this.getDetail();
      });
  }

  getDetail() {
    console.log('chamar api Detail');
  }
}
