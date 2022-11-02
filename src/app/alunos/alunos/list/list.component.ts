import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private service: AlunoService) {}

  ngOnInit() {
    this.service.subject_ok.pipe(filter((item) => item)).subscribe((resp) => {
      console.log('resp List', resp);
      this.getList();
    });
  }

  getList() {
    console.log('chamar api List');
  }
}
