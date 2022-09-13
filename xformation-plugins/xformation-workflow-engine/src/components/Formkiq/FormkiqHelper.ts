export class FormkiqHelper {
  formkiqClient: any;
  constructor(formkiqUrl: any, formkiqUserName: any, formkiqPassword: any, cb: any) {
    this.formkiqClient = new window.exports.FormkiqClient(formkiqUrl, '', '', {
      onFormSubmitted: (formName: any) => {},
      onFormCompleted: (formName: any, response: any) => {
        cb(response);
      },
    });
    this.formkiqClient.login(formkiqUserName, formkiqPassword);
  }

  handleUploadForm(formData: any) {
    this.formkiqClient.webFormsHandler.submitFormkiqForm(formData);
  }

  getUploadedDocument(docId: any, cb: any) {
    this.formkiqClient.documentsApi.getDocumentUrl(docId).then((response: any) => {
      cb(response);
    });
  }
}
