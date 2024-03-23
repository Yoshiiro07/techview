import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, BehaviorSubject, Subscription } from 'rxjs';
import { startWith, switchMap, tap, debounceTime } from 'rxjs/operators';
import { Diretoria } from '../models/Diretoria';
import { Estrutura } from '../models/Estrutura';
import { Comunidade } from '../models/Comunidade';
import { ReleaseTrain } from '../models/ReleaseTrain';
import { Squad } from '../models/Squad';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  //Loaders
  sub!: Subscription;
  errorMsg: string = '';
  expanded: boolean = true;
  listaUsers: Diretoria[] = [];
  listIndicadores: Estrutura[] = [];
  listInidcadoresFilter: Estrutura[] = [];
  view: string = '';
  viewActual: string = 'bar';
  userlogged: string = '';
  employeeID: string = '';

  
  //User Filter placeholder
  itemsdiretoria: Diretoria[] = [];
  itemscomunidade: Comunidade[] = [];
  itemsreleasetrain: ReleaseTrain[] = [];
  itemssquad: Squad[] = [];
  diretoriavalue: string[] = [];
  diretoriaselect: Diretoria = { nomeDiretoria: "Selecione uma opção", codDiretoria: "none", listaComunidades: [] };
  comunidadevalue: string[] = [];
  comunidadeselect: Comunidade = { nomeComunidade: "Selecione uma opção", codComunidade: "none", listaRTs: [] };
  releasetrainvalue: string[] = [];
  releasetrainselect: ReleaseTrain = { nomeRT: "Selecione uma opção", codRT: "none", listaSquads: [] };
  squadvalue: string[] = [];
  squadselect: Squad = { nomeSquad: "Selecione uma opção", codSquad: "none" };

  //Mock Json
  diretoriaJson: string[] = ['987338962'];
  comunidadeJson: string[] = ['987338962'];
  releasetrainJson: string[] = ['987338962'];
  squadJson: string[] = ['987338962']; 
  mesesJson:string[] = ['2312312'];
  trimestresjson:string[] = ['2312312'];

  //Date Reference // Best to Last // Item Headers
  referencedate = new FormControl();
  datelist: string[] = [];
  actualdate: string = '';
  filterdate: string[] = [];
  ExibitDate: string = '';
  filterBestLast: string = 'Do Melhor para o Pior';
  filterPriorized: string = 'Todos';
  listindicadorperiodo: string[] = ['mar/23','mar/23','mar/23','mar/23','mar/23','mar/23'];

  //Filter by Semaforos
  filterControle: number = 0;
  filterAtencao: number = 0;
  filterCritico: number = 0;

  //Filter by Text
  searchControl = new FormControl();
  filtertext: string = '';
  listoptionsindicadores: string[] = [];
    
  //View
  isButtonBarClicked = true;
  isButtonCardClicked = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.SetView();
    this.CheckLogin();
    this.ReferenceDataOnStart();
    this.LoadData();
    this.LoadUsers();
    this.LoadDataLocal();
    this.LoadUsersLocal();
    this.LoadHeadersPeriodo();
    this.LoadCombosUser();
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  //View Methods
  SetView(): void {
    this.view = this.viewActual;
  }

  ChangeViewCard(): void {
    this.isButtonCardClicked = true;
    this.isButtonBarClicked = false;
    this.viewActual = 'cards';
  }

  ChangeViewBar(): void {
    this.isButtonBarClicked = true;
    this.isButtonCardClicked = false;
    this.viewActual = 'bar';
  }

  //Operations
  LoadUsers(): void {
    this.indicadorService.getAllUsers().subscribe({
      next: users => {
        this.listaUsers = users;
        this.LoadComboUsers();
      },
      error: (err: string) => this.errorMsg = err
    });
  }

  

  

  

}