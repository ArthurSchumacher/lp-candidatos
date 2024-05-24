import paths from "@/paths";
import { Button, Input, Textarea } from "@nextui-org/react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-blue text-white">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-evenly gap-16">
        <div className="w-full">
          <div className="flex items-center justify-center flex-col">
            <Link href="/" className="text-2xl font-bold">
              Herculano Borges
            </Link>
            <p className="font-light text-sm text-center py-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              necessitatibus, laudantium deleniti ut, facilis voluptas suscipit
              officiis ducimus quibusdam sequi molestiae labore consectetur sed
              quidem neque, dolores possimus dicta? Dolor.
            </p>
          </div>
          <div className="flex items-center justify-center py-4 gap-6">
            <Link
              href={paths.instagram()}
              target="_blank"
              className="text-white hover:text-white-400 hover:bg-orange"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href={paths.instagram()}
              target="_blank"
              className="text-white hover:text-white-400 hover:bg-orange"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href={paths.instagram()}
              target="_blank"
              className="text-white hover:text-white-400 hover:bg-orange"
            >
              <Youtube size={20} />
            </Link>
            <Link
              href={paths.instagram()}
              target="_blank"
              className="text-white hover:text-white-400 hover:bg-orange"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href={paths.instagram()}
              target="_blank"
              className="text-white hover:text-white-400 hover:bg-orange"
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>
        <div className="w-full">
          <div className="pb-4 flex items-center justify-center flex-col">
            <p className="font-bold mb-4">Brasília/DF</p>
            <p className="font-light text-sm">
              Anexo 04 - 2º Andar - Gabinete, 240
            </p>
            <p className="font-light text-sm">(67) 9 9999-9999</p>
          </div>
          <div className="pb-4 flex items-center justify-center flex-col">
            <p className="font-bold mb-4">Campo Grande/MS</p>
            <p className="font-light text-sm">
              Marquês de Lavradio, 1181 - Jd. São Lourenço
            </p>
            <p className="font-light text-sm">(67) 9 9999-9999</p>
          </div>
        </div>
        <div className="w-full">
          <form className="flex flex-col gap-y-4">
            <Input />
            <Input />
            <Input />
            <Textarea />
            <Button className="w-full" />
          </form>
        </div>
      </div>
      <div className="bg-emerald-500 w-full h-16 flex items-center justify-center">
        <p className="text-sm font-extralight antialiased">
          Herculano Borges 2024 © Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
