import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp;
      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.id = this.usuarioLogin.id
      environment.foto = this.usuarioLogin.foto
      environment.tipo = this.usuarioLogin.tipoUsuario
      environment.usuario = this.usuarioLogin.usuario
      this.router.navigate(['/inicio'])
    },erro =>{
      if(erro.status = 500){
        alert('Usuario ou senha estão incorretos!')
      
      }
      
      
        
    })

      //alert(`Você precisa ser ((${environment.usuario})) para acessar essa rota`)
      //this.router.navigate(['/inicio'])
    
  }

  

}
