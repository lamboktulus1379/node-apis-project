import { Request, Response  } from "express";
import { ContactController } from "../controllers/crmController";



export class Routes {
  public contactController: ContactController = new ContactController();

  public routes(app:any): void {
    app.route('/')
    .get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'Get request successfull'
      });
    });

    // Contact
    app.route('/contact')
    .get(this.contactController.getContacts)
    .post(this.contactController.addNewContact);

    // Contact Detail
    app.route('/contact/:contactId')
    .get(this.contactController.getContactWithID)
    .put(this.contactController.updateContact)
    .delete(this.contactController.deleteContact)
  }
}