var contenido = "";
		function cargarMensajes() {
			var cont = 1;
			var datos = {
				"mode": "cargar-mensajes"
			};
			$.ajax({
				data: datos,
				url: "index.php",
				type: 'POST',
				success: function (response) {

					var array = JSON.parse(response);
					var html = "";
					var htmlMsj = "";
					array.forEach(function (element) {
						if (cont % 2 == 0) {
							htmlMsj = '<div class="message w3layouts"><img src="public/images/usuario.png"><div class="bubble">' + element['mensaje'] + '<span>' + element['hora'] + ' ~ ' + element['emisor'] + '</span></div></div>';

						} else {
							htmlMsj = '<div class="message right agileits"><img src="public/images/usuario.png"><div class="bubble">' + element['mensaje'] + '<span>' + element['hora'] + ' ~ ' + element['emisor'] + '</span></div></div>';
						}
						html += htmlMsj;
						cont++;
					}, this);

					if (html != contenido) {
						contenido = html;
						$("#chat-messages").html(html);
						$("#chat-messages").scrollTop(9999999999999);
					}


				}
			});
		}

		function enviarMensaje(msj) {
			var datos = {
				"mode": "enviar-mensaje",
				"msj": msj
			};
			$.ajax({
				data: datos,
				url: "index.php",
				type: 'POST',
				success: function (response) {
					cargarMensajes();
					$("#mensaje").val("");

				}
			});
		}

		$(document).ready(function () {
			cargarMensajes();
			setInterval(cargarMensajes, 1000);
			$("#enviar").on("click", function () {
				var x = $("#mensaje").val();
				if (x != "") {
					enviarMensaje(x);
				}

			});

			$("#mensaje").keypress(function (e) {
				if (e.which == 13) {
					var x = $("#mensaje").val();
					if (x != "") {
						enviarMensaje(x);
					}
				}
			});


		});