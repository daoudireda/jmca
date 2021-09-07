<!-- Modal -->
<div class="modal fade" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <!--<div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 class="modal-title" id="myModalLabel">Confirmation </h4>
            </div>--->
            <div class="modal-body">
                <iframe name="formDestination"frameborder="0" allowtransparency="true" style="height: 100%; width: 100%"></iframe>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>

<form name="contactform" method="post" action="" target="formDestination">
    <div class="form-double">
        <input type="text" id="form-name" name="form-name" placeholder="Votre nom (obligatoire)" class="form-control">
        <input type="text" id="form-email" name="form-email" class="form-control" placeholder="Votre e-mail (obligatoire)">
    </div>
	 <input type="text" id="form-telephone" name="form-telephone" class="form-control" placeholder="Téléphone (obligatoire)">
    <input type="text" id="form-subject" name="form-subject" class="form-control" placeholder="Objet">
    <textarea id="form-message" name="form-message" rows="5" class="form-control" placeholder="Votre message"></textarea>
    <div class="g-recaptcha" data-sitekey="6LcTJIIUAAAAAJ56IFodgxX8iJZvdiffbkIFE2yD"></div>
    <button type="submit" id="btn-send" class="btn btn-primary" data-toggle="modal" data-target="#confirmModal">Envoyer</button>
</form>