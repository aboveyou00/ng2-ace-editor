import { NgModule } from '@angular/core';

import { AceEditorComponent } from './component';
import { AceEditorDirective } from './directive';

@NgModule({
    declarations: [
        AceEditorComponent,
        AceEditorDirective
    ],
    imports: [],
    providers: [],
    exports: [
        AceEditorComponent,
        AceEditorDirective
    ]
})
export class AceEditorModule { }
