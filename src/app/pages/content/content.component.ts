import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://s3-alpha.figma.com/hub/file/4093188630/561dfe3e-e5f8-415c-9b26-fbdf94897722-cover.png';
  contentTitle: string =
    'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...';
  contentDescription: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat neque finibus, fermentum lacus eget, congue mauris.';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => console.log(value.get('id')));
  }
}
