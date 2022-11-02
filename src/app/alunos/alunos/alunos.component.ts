import { Component, OnInit } from '@angular/core';
import { debounce } from 'rxjs/operators';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  constructor(private service: AlunoService) {}

  ngOnInit() {
    // this.setOK();
  }

  setOK() {
    this.service.setOK();
  }
}
