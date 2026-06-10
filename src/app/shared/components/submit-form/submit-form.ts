import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Button } from 'primeng/button';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { InputMask } from 'primeng/inputmask';
import { InputText } from 'primeng/inputtext';
import { Textarea } from 'primeng/textarea';

@Component({
  selector: 'app-submit-form',
  imports: [
    InputMask,
    InputText,
    Textarea,
    Button,
    ReactiveFormsModule,
    ConfirmDialog
  ],
  templateUrl: './submit-form.html',
  styleUrl: './submit-form.scss'
})
export class SubmitForm {
  private readonly confirmationService = inject(ConfirmationService);
  private readonly httpClient = inject(HttpClient);
  private readonly fb = inject(FormBuilder);
  protected readonly form = this.fb.group({
    phoneNumber: this.fb.control<string | null>(null, Validators.required),
    fullName: this.fb.control<string | null>(null, Validators.required),
    question: this.fb.control<string | null>(null),
  });

  protected submit() {
    const form = this.form.value;
    this.httpClient.post(
      'https://api.telegram.org/bot8868425667:AAFX3i1LxTaA8QDY5LYbSwayP3V9FluMxOE/sendMessage',
      {
        chat_id: '1802792474',
        text: `✅ Yangi xabar!\nIsm: ${form.fullName}\nTel. nomer: ${form.phoneNumber}\nSavol: ${form.question || "Yo'q"}`
      }
    ).subscribe();
    this.httpClient.post(
      'https://api.telegram.org/bot8868425667:AAFX3i1LxTaA8QDY5LYbSwayP3V9FluMxOE/sendMessage',
      {
        chat_id: '1268306946',
        text: `✅ Yangi xabar!\nIsm: ${form.fullName}\nTel. nomer: ${form.phoneNumber}\nSavol: ${form.question || "Yo'q"}`
      }
    ).subscribe();

    this.confirmationService.confirm({
      message: "Siz bilan tez orada bog'lanamiz 😊",
      rejectVisible: false,
      acceptLabel: "Rahmat",
      closable: false
    });

    this.form.reset();
  }
}
