export const html = `<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <title>Confirmación de pedido</title>
  <style>
    body {
      font-family: sans-serif;
      font-size: 16px;
      color: #333;
      background-color: #fff;
    }

    h1 {
      font-size: 24px;
      margin-top: 0;
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 10px;
    }

    ul {
      margin-bottom: 20px;
    }

    li {
      margin-bottom: 5px;
    }

    b {
      font-weight: bold;
    }

    img {
      width: 100%;
    }

    .container {
      width: 600px;
      margin: 0 auto;
    }

    .header {
      background-color: #000;
      color: #fff;
      padding: 20px;
    }

    .content {
      padding: 20px;
    }

    .footer {
      background-color: #000;
      color: #fff;
      padding: 20px;
      text-align: center;
    }

    .card {
      width: 280px;
      height: 370px;
      background-color: #fff;
      border: 1px solid #000;
      margin: 20px auto;
    }

    .card-header {
      background-color: #000;
      color: #fff;
      padding: 20px;
    }

    .card-content {
      padding: 20px;
    }

    .card-footer {
      background-color: #000;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h1>Confirmación de pedido</h1>
      </div>

      <div class="card-content">
        <p>
          Su pedido ha sido recibido. El número de pedido es <b>{{ order_number }}</b>.
        </p>

        <p>
          Los detalles de su pedido son los siguientes:
        </p>

        <ul>
          <li>Producto: <b>{{ product_name }}</b></li>
          <li>Cantidad: <b>{{ quantity }}</b></li>
          <li>Precio: <b>{{ price }}</b></li>
        </ul>

        <p>
          Gracias por su compra.
        </p>
      </div>

      <div class="card-footer">
        <p>
          <a href="#">Volver a la tienda</a>
        </p>
      </div>
    </div>
  </div>
</body>

</html>`