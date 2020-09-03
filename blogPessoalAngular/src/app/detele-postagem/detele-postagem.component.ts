import { Component, OnInit } from '@angular/core';
import { Postagem } from '../model/Postagem';
import { Router, ActivatedRoute } from '@angular/router';
import { PostagemService } from './../service/postagem.service';

@Component({
  selector: 'app-detele-postagem',
  templateUrl: './detele-postagem.component.html',
  styleUrls: ['./detele-postagem.component.css']
})
export class DetelePostagemComponent implements OnInit {
  
  postagem: Postagem = new Postagem()

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    
    window.scroll(0,0)
    let id: number = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
  }

  findByIdPostagem(id:number){
    this.postagemService.getByIdPostagem(id).subscribe((resp: Postagem) => {
      this.postagem=resp
    })
  }

  btnSim() {
    this.postagemService.deletePostagem(this.postagem.id).subscribe(() => {
      this.router.navigate(['/feed'])
      alert ('Postagem apagada com sucesso!')
    })
  }

  btnNao(){
    this.router.navigate(['/feed'])
  }

}

