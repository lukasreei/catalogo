document.addEventListener('DOMContentLoaded', () => {
    // ---------------- Lightbox ----------------
    const images = document.querySelectorAll('.item-images img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.close');

    images.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex'; // mostra o lightbox
        });
    });

    // Fecha ao clicar no X
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Fecha ao clicar fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // ---------------- Carrinho ----------------
    const cartItems = [];

    function addToCart(nome, preco) {
        cartItems.push({ nome, preco });
        atualizarCarrinho();
    }

    function atualizarCarrinho() {
        const cartList = document.getElementById("cart-items");
        cartList.innerHTML = "";
        cartItems.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.nome; // apenas o nome
            cartList.appendChild(li);
        });
    }

    function finalizarCompra() {
        if (cartItems.length === 0) {
            alert("Seu carrinho está vazio!");
            return;
        }
        const numero = "5583991228516"; // DDI + DDD + número
        const mensagem = `Olá, gostaria de finalizar minha compra com os seguintes itens:\n- ${cartItems.map(item => item.nome).join("\n- ")}`;
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    }

    document.querySelector(".checkout-btn").addEventListener("click", finalizarCompra);

    // ---------------- Botões "Adicionar ao Carrinho" ----------------
    document.querySelectorAll(".item").forEach(item => {
        const nome = item.querySelector("h3").textContent;
        const precoText = item.querySelector(".price") 
            ? item.querySelector(".price").textContent.replace("R$", "").replace(",", ".").trim() 
            : "0";
        const preco = parseFloat(precoText);

        const btn = document.createElement("button");
        btn.classList.add("add-to-cart");
        btn.textContent = "Adicionar ao Carrinho";
        btn.onclick = () => addToCart(nome, preco);

        item.appendChild(btn);
    });
  const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.appbar ul');
    const links = document.querySelectorAll('.appbar a');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
            }
        });
    });

});
