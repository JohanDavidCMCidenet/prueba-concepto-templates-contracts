import { Component, OnInit } from '@angular/core';
import { TemplateHandler } from 'easy-template-x';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'prueba-concepto';
  public html = '';
  file?: File;

  constructor() {}

  ngOnInit(): void {

  }

  public async convertData(){
    if(this.file){
      const data = {
        owners: [
          {
            ow_has_nit: true,
            ow_name: 'Empresa S.A.S',
            ow_lastname: '',
            ow_has_cc: false,
            ow_name_legal_rep: 'El compa',
            ow_lastname_legal_rep: 'del NIT',
            ow_address: 'Calle 98c',
            ow_address_complement: 'Casa primer piso',
            ow_email: 'random@random.com',
            ow_document_number_legal_rep: 1017275747,
            do_description: 'Cedula de ciudadania',
            ow_city: 'Medellín',
            do_id: 'NIT',
            do_description_legal_rep: 'CC',
            ow_document_number: '2017257984',
            ow_city_document: 'Bello',
            ow_city_commerce_chamber: 'Bucaramanga'
          },
          {
            ow_has_nit: false,
            ow_has_cc: true,
            ow_name: 'El compa',
            ow_lastname: 'del CC',
            ow_name_legal_rep: '',
            ow_address: 'Calle 98c',
            ow_address_complement: 'Casa primer piso',
            ow_lastname_legal_rep: '',
            ow_email: 'random@random.com',
            do_description: 'Cedula de ciudadania',
            ow_city: 'Medellín',
            ow_document_number_legal_rep: '',
            do_id: 'CC',
            do_description_legal_rep: '',
            ow_document_number: '2017257984',
            ow_city_document: 'Bello',
            ow_city_commerce_chamber: ''
          },
        ],
        tenants: [
          {
            te_has_cc: true,
            te_has_nit: false,
            te_name_legal_rep: '',
            te_lastname_legal_rep: '',
            te_name: 'Inquilino',
            te_lastname: 'Con CC',
            do_description_legal_rep: '',
            te_document_number_legal_rep: '',
            do_description: 'Cedula de ciudadania',
            te_document_number: '',
            te_address: 'Calle 25E # 15 - 54',
            te_address_complement: 'Casa primer piso',
            te_email: 'correo@tenant1.com'
          },
          {
            te_has_cc: false,
            te_has_nit: true,
            te_name_legal_rep: 'Inquilino',
            te_lastname_legal_rep: 'Con NIT',
            te_name: 'Empresa Inquilino S.A.S',
            te_lastname: '',
            do_description_legal_rep: 'Num id T',
            te_document_number_legal_rep: 9024152362,
            do_description: '',
            te_document_number: '1017275747',
            te_address: 'Calle 25E # 15 - 54',
            te_address_complement: 'Casa primer piso',
            te_email: 'correo@tenant2.com'
          }
        ],
        cosigners: [
          {
            cos_has_nit: true,
            cos_has_cc: false,
            cos_name: 'Codeudor',
            cos_lastname: 'Con Nit',
            do_id: 'NIT',
            cos_document_number: 9015248515,
            cos_name_legal_rep: 'Legal Cod',
            cos_lastname_legal_rep: 'con Nit',
            cos_address: 'Calle 54A # 85 - 41',
            cos_address_complement: 'Apartamento 102',
            cos_email: 'cosginer1@cosigner.com',
          },
          {
            cos_has_nit: false,
            cos_has_cc: true,
            cos_name: 'Codeudor',
            cos_lastname: 'Con CC',
            do_id: 'CC',
            cos_document_number: 1017275747,
            cos_name_legal_rep: '',
            cos_lastname_legal_rep: '',
            cos_address: 'Calle 54A # 85 - 41',
            cos_address_complement: 'Apartamento 102',
            cos_email: 'cosginer2@cosigner.com',
          }
        ],
        est_address: 'Calle 10 #25 - 8',
        est_address_complement: 'Casa primer piso',
        est_city: 'Santa fé',
        est_square_meter: '25',
        est_legar_register: '10201514',
        est_type: 'Apartamento',
        est_administration_in_words: 'Doscientos mil pesos',
        est_administration: '200.000',
        //Contract data
        co_boundaries: 'Texto boundaries',
        co_start: '01 de Enero de 2022',
        co_end: '31 de Diciembre de 2023',
        co_canon_in_words: 'Un millón de pesos',
        co_canon: '1.000.000',
        // Si alguna de estás tres propiedades (co_has_ipc, co_has_ipc_points, co_has_percentege) es verdadera el resto deben de ser falsas
        co_has_ipc: true,
        co_has_ipc_points: false,
        co_has_percentege: false,
        // Estas tres
        co_ipc_points: 19,
        co_percentege: 20,
        co_grace_date: true,
        // Sie co_grace_date es true las siguientes tres propiedades son requeridas (co_grace_day, co_grace_month_in_letters, co_grace_year)
        co_grace_day: 12,
        co_grace_month_in_letters: 'Febrero',
        co_grace_year: 2022,
        // Si es true debe de ser requerida la siguiente propiedad co_additional_clauses
        co_has_additional_clauses: true,
        co_additional_clauses: 'Texto clausulas adicionales'

      }
      const handler = new TemplateHandler();
      const doc = await handler.process(this.file, data);
      this.saveFile('myTemplate - output.docx', doc);
    }
  }

  private saveFile(filename: string, blob: Blob) {
    const blobUrl = URL.createObjectURL(blob);
    let link: HTMLAnchorElement | null  = document.createElement("a");
    link.download = filename;
    link.href = blobUrl;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
        link?.remove();
        window.URL.revokeObjectURL(blobUrl);
        link = null;
    }, 0);
}

  public fileChanged(event: any){
    this.file = event.target.files[0];
  }
}
