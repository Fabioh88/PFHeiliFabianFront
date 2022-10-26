import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {
  skill: Skill= null;

  constructor(private skillS: SkillService, private activatedrouter: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id=this.activatedrouter.snapshot.params['id'];
    this.skillS.detail(id).subscribe(
      data=>{
        this.skill=data;
      }, err=>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id=this.activatedrouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      data=>{
        this.router.navigate(['']);
      },err=>{
        alert("Error al modificar Skill");
        this.router.navigate(['']);
      }
    )
  }
}
