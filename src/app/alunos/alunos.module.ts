import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './alunos/detail/detail.component';
import { ListComponent } from './alunos/list/list.component';
import { AlunosComponent } from './alunos/alunos.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DetailComponent, ListComponent, AlunosComponent],
  exports: [DetailComponent, ListComponent, AlunosComponent],
})
export class AlunosModule {}
