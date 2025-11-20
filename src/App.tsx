import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { Heart, Truck, Settings, Sparkles, Star, Quote } from "lucide-react";
import { Navbar } from "./components/Navbar";

export default function App() {
  const benefits = [
    {
      icon: Heart,
      title: "Feito à Mão",
      description:
        "Cada tapete é cuidadosamente feito à mão com atenção a todos os detalhes",
    },
    {
      icon: Sparkles,
      title: "Durável",
      description: "Feito com materiais premium para durar anos na sua casa",
    },
    {
      icon: Settings,
      title: "Personalizável",
      description: "Escolha suas cores, tamanhos e padrões preferidos",
    },
    {
      icon: Truck,
      title: "Entrega Nacional",
      description: "Entregamos lindos tapetes na sua porta em todo o país",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Tapete Pure Rose",
      price: 129,
      image:
        "https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/571282514_1836552250268072_6358922835723266693_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEg1knMKOs7Oj3jcvv7ZiOA0NmDwes6wI3Q2YPB6zrAjVrjVHCABNmeaM8WJBS-uIN-KNKnGC9ncfWMnXRSD7Ft&_nc_ohc=fCrx0YQak0kQ7kNvwHD86qH&_nc_oc=AdljKSi1fX1AsBu2vutn7vOj7vjKJYu_4jpVtBL8SlFs50YaL4EGtx8Jd_YIcp2BSZk&_nc_zt=23&_nc_ht=scontent-gru2-2.xx&_nc_gid=W7vknA4YEWSKDWV2IOBjCQ&oh=00_Afg1Y-BCx1atHJ_qcNaXiFW2rwmbQLztGetw-_u9yJHQaA&oe=69227279https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/571282514_1836552250268072_6358922835723266693_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEg1knMKOs7Oj3jcvv7ZiOA0NmDwes6wI3Q2YPB6zrAjVrjVHCABNmeaM8WJBS-uIN-KNKnGC9ncfWMnXRSD7Ft&_nc_ohc=fCrx0YQak0kQ7kNvwHD86qH&_nc_oc=AdljKSi1fX1AsBu2vutn7vOj7vjKJYu_4jpVtBL8SlFs50YaL4EGtx8Jd_YIcp2BSZk&_nc_zt=23&_nc_ht=scontent-gru2-2.xx&_nc_gid=W7vknA4YEWSKDWV2IOBjCQ&oh=00_Afg1Y-BCx1atHJ_qcNaXiFW2rwmbQLztGetw-_u9yJHQaA&oe=69227279",
    },
    {
      id: 2,
      name: "Tapete Creme Sonhado",
      price: 149,
      image:
        "https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/544627431_1796864284236869_3240432332053594713_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGp6DGYe4zBl3QD97WzPOcofSx9sqgjRrh9LH2yqCNGuEp8M1MlsIE4gufiFg_sGqq7bWVBCR5PhGEjuzl6_00j&_nc_ohc=emyVq5MofToQ7kNvwGTNQHz&_nc_oc=Adm2UxGAdgMZjIriU_fKnpsq3bfFgHwB6-aW6lIOMAHV3mR0Xitnvdmir2773b-vBBE&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=qlzFg72AIz9tb8KJgrAfyA&oh=00_Afgj0S3q0g8wESuVzNw3wn7REp7mIDxkq62iPRagQH0JDA&oe=69228DD7",
    },
    {
      id: 3,
      name: "Tapete Aconchegante",
      price: 139,
      image:
        "https://images.unsplash.com/photo-1722152882374-42708ee722fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbml0dGVkJTIwcnVnJTIwY3JlYW18ZW58MXx8fHwxNzYzNDEzMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      name: "Tapete Textura Natural",
      price: 159,
      image:
        "https://images.unsplash.com/photo-1756361771435-b60616ef968c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHJ1ZyUyMHRleHR1cmV8ZW58MXx8fHwxNzYzNDEzMDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      name: "Tapete Elegância Tecida",
      price: 169,
      image:
        "https://scontent-gru2-1.xx.fbcdn.net/v/t39.30808-6/470131102_1605296653393634_3215212854366277393_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGFvT-jZ0c21BbMIoVnUnApqc4DoBvtQXepzgOgG-1BdxjHxpAum6RpBs08-IAJbXYKHgmIyG33_FR34DE77U2f&_nc_ohc=AbWXfhlKEIAQ7kNvwFtiUtM&_nc_oc=Adn-HRTjAeC3u3C00PTigbNZSuxcizvo0h6WJ7ZsZWLvqWAKrOQqGr4J-jsRzklkqcU&_nc_zt=23&_nc_ht=scontent-gru2-1.xx&_nc_gid=nECeWPKCjhhInk6vU-KEbw&oh=00_Afi7K2jQVuywkW-ieO6ov9Ojni7cLx1EqJByL1CFpuezpA&oe=69228FDC",
    },
    {
      id: 6,
      name: "Tapete Artesanal Mix",
      price: 145,
      image:
        "https://scontent-gru1-2.xx.fbcdn.net/v/t39.30808-6/470186745_1605289153394384_3440526384326480771_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEgndRl2vrz44ZmwgCnT62fJcTgvRZMnPIlxOC9Fkyc8k8U6f3jpvHtKu2z8eKFQBmv2TO97Lud97-6NabXDlSF&_nc_ohc=ckbN8bIqxe4Q7kNvwFOHuS_&_nc_oc=AdnfeOOK4los4IdFUcrtEILzfUFSBZ1-45UBVk19sqSJQsaGW1kU7IZNZsbiVPmo36A&_nc_zt=23&_nc_ht=scontent-gru1-2.xx&_nc_gid=6BGTKFdnkk4TOSbT2yEiBg&oh=00_Afjy61WTxdCOIOwSCKCZSZiMzwLlwUHQlYDVa_dlH-uu3A&oe=692262FC",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "A qualidade é excelente! Meu tapete de crochê é a peça central da minha sala de estar. Tão aconchegante e lindamente feito.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "Fiquei impressionado com o artesanato. As cores são perfeitas e adicionam tanto aconchego à nossa casa.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Williams",
      text: "Adorei demais! As opções de personalização fizeram com que ficasse perfeito para o quarto do bebê. Super recomendo!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1712470121544-d27418868b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9jaGV0JTIwcnVnJTIwaGFuZG1hZGV8ZW58MXx8fHwxNzYzNDEzMDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Beautiful handmade crochet rug"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/80 via-[#FAF8F5]/60 to-[#FAF8F5]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="mb-6 text-[#5D4E3C]">Tapetes de Crochê Artesanais</h1>
          <p className="mb-8 text-[#8B7355] max-w-2xl mx-auto">
            Trazendo aconchego e conforto para o seu lar com tapetes artesanais
            feitos com materiais premium. Cada peça é uma obra de arte única,
            criada para durar uma vida inteira.
          </p>
          <Button
            size="lg"
            className="bg-[#C9A88A] hover:bg-[#B8977A] text-white rounded-full px-8 shadow-lg"
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver Modelos
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 bg-white border-none shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#E8D5C4] flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-[#8B7355]" />
                  </div>
                  <h3 className="text-[#5D4E3C]">{benefit.title}</h3>
                  <p className="text-[#8B7355]">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Gallery Section */}
      <section id="products" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#5D4E3C]">Nossa Coleção</h2>
            <p className="text-[#8B7355] max-w-2xl mx-auto">
              Explore nossa seleção cuidadosamente curada de tapetes de crochê
              artesanais, cada um único e feito com carinho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl bg-[#FAF8F5]"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-[#5D4E3C]">{product.name}</h3>
                  <p className="mb-4 text-[#C9A88A]">R$ {product.price}</p>
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-[#C9A88A] text-[#8B7355] hover:bg-[#C9A88A] hover:text-white"
                  >
                    <a
                      href={`https://wa.me/5599999999999?text=${encodeURIComponent(
                        `Olá! Gostaria de saber mais informações sobre o tapete "${product.name}" anunciado no seu site.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Detalhes
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-[#F5EDE5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-[#5D4E3C]">O que Nossos Clientes Dizem</h2>
            <p className="text-[#8B7355]">
              Ouça de quem transformou seus espaços com nossos tapetes
              artesanais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="p-8 bg-white border-none shadow-md rounded-2xl relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-[#E8D5C4]" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#D4A574] text-[#D4A574]"
                    />
                  ))}
                </div>
                <p className="mb-6 text-[#8B7355] italic">
                  "{testimonial.text}"
                </p>
                <p className="text-[#5D4E3C]">— {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About the Artisan Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="mb-6 text-[#5D4E3C]">Sobre a Artista</h2>
              <p className="mb-4 text-[#8B7355]">
                Olá, eu sou a Nena! Crio tapetes de crochê artesanais há mais de
                15 anos, transformando fibras macias em belas peças funcionais
                de arte para casas ao redor do país.
              </p>
              <p className="mb-4 text-[#8B7355]">
                Cada tapete que crio conta uma história e é feito com materiais
                de origem sustentável. Acredito que itens artesanais carregam
                uma energia e calor especial que peças massificadas simplesmente
                não podem replicar.
              </p>
              <p className="text-[#8B7355]">
                Quando você traz um dos meus tapetes para casa, não está apenas
                comprando um produto—está investindo em artesanato,
                sustentabilidade e uma peça de arte que trará alegria por anos.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.6435-9/48379443_1183855495101834_1768141523553091584_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHscFba9sZgZJoPvBWcbn5SZ634hsHFBi5nrfiGwcUGLlvVePZ1XdY0GAxYXyREqwISiNkVKlveTsj4wsnCfouL&_nc_ohc=crS6SE4lyg0Q7kNvwEgv490&_nc_oc=AdmwXH2AOirnQLwCWB1TlxNPU9OEFqmC3LGg1zTdM9L_fkrXbOYSBwGEjp_OQiKS-f4&_nc_zt=23&_nc_ht=scontent-gru2-2.xx&_nc_gid=gIwCE8D411alc7xHiki2WA&oh=00_AfhK-X7MnBzu0ro8rrTAAmfb08tXqGHoonDFuRb-5XNCfA&oe=69442F4A"
                  alt="Maria, the artisan"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="contact"
        className="py-24 px-4 bg-gradient-to-br from-[#E8D5C4] to-[#D4C4B0]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-[#5D4E3C]">
            Pronto para Transformar Seu Espaço?
          </h2>
          <p className="mb-8 text-[#8B7355] max-w-2xl mx-auto">
            Peça seu tapete de crochê artesanal personalizado hoje e experimente
            o calor e conforto que apenas peças artesanais podem trazer para sua
            casa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#8B7355] hover:bg-[#6D5A44] text-white rounded-full px-10 shadow-lg"
              asChild
            >
              <a
                href={`https://wa.me/11933647274?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20tapete%20personalizado.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir Agora
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white px-10"
              asChild
            >
              <a
                href={`https://wa.me/11933647274?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20tapete%20personalizado.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar em Contato
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#5D4E3C] text-center">
        <p className="text-[#E8D5C4]">
          © 2025 Tapetes de Crochê Artesanais. Feito com amor, ponto a ponto.
        </p>
      </footer>
    </div>
  );
}
