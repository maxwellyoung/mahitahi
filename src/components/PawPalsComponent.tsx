"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  PawPrint,
  Heart,
  Calendar,
  Users,
  ChevronRight,
  Menu,
  Smile,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const useScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(ref);
      return () => observer.disconnect();
    }
  }, [controls, ref]);

  return [setRef, controls] as const;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  const [ref, controls] = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="flex flex-col items-center space-y-3 text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-amber-200 dark:border-amber-700"
    >
      <Icon className="h-10 w-10 text-amber-500 dark:text-amber-400" />
      <h2 className="text-xl font-bold text-amber-700 dark:text-amber-300">
        {title}
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

export default function PawPalsComponent() {
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 dark:from-gray-900 dark:to-gray-800">
      <header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-amber-200 dark:border-amber-800">
        <a className="flex items-center justify-center" href="#">
          <PawPrint className="h-6 w-6 text-amber-500 dark:text-amber-400" />
          <span className="ml-2 text-lg font-bold text-amber-700 dark:text-amber-300">
            PawPals
          </span>
        </a>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400 transition-colors"
            href="#"
          >
            Our Story
          </a>
          <a
            className="text-sm font-medium text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400 transition-colors"
            href="#"
          >
            Become a PawPal
          </a>
          <a
            className="text-sm font-medium text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400 transition-colors"
            href="#"
          >
            Wag Hello
          </a>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto md:hidden text-amber-700 dark:text-amber-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </header>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 left-0 right-0 bg-white dark:bg-gray-900 z-40 p-4 border-b border-amber-200 dark:border-amber-800"
        >
          <nav className="flex flex-col gap-4">
            <a
              className="text-sm font-medium text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400 transition-colors"
              href="#"
            >
              Our Story
            </a>
            <a
              className="text-sm font-medium text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400 transition-colors"
              href="#"
            >
              Become a PawPal
            </a>
            <a
              className="text-sm font-medium text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400 transition-colors"
              href="#"
            >
              Wag Hello
            </a>
          </nav>
        </motion.div>
      )}
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-2"
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-amber-800 dark:text-amber-200">
                  Bringing Smiles,{" "}
                  <span className="text-amber-500 dark:text-amber-400">
                    One Wag at a Time
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-amber-700 md:text-xl dark:text-amber-300">
                  PawPals connects loving dogs and their owners with elderly
                  friends for heartwarming visits and tail-wagging adventures!
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-sm space-y-2"
              >
                <form
                  className="flex space-x-2"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <Label htmlFor="email" className="sr-only">
                    Email
                  </Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="max-w-lg flex-1 bg-white dark:bg-gray-800 border-amber-300 dark:border-amber-700 focus:ring-amber-500 focus:border-amber-500"
                  />
                  <Button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-600 text-white"
                  >
                    Join the Pack
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-amber-700 dark:text-amber-300">
                  Wag your way into our community! Sign up to learn more or
                  become a furry friend volunteer.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={Heart}
                title="Furry Friendships"
                description="Create lasting bonds between seniors and lovable canine companions."
              />
              <FeatureCard
                icon={Calendar}
                title="Pawsome Playdates"
                description="Regular, tail-wagging visits that brighten everyone's day."
              />
              <FeatureCard
                icon={Users}
                title="Bark & Bond"
                description="Building a community where age is just a number and love has four paws."
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid gap-10 lg:grid-cols-2 items-center"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-800 dark:text-amber-200">
                  How PawPals Spreads Joy
                </h2>
                <p className="text-amber-700 dark:text-amber-300 md:text-lg">
                  It&apos;s as easy as a walk in the park! Here&apos;s how we
                  match wagging tails with warm hearts:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <Smile className="h-5 w-5 text-amber-500 dark:text-amber-400" />
                    <span className="text-amber-700 dark:text-amber-300">
                      Create your pawsome profile
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Smile className="h-5 w-5 text-amber-500 dark:text-amber-400" />
                    <span className="text-amber-700 dark:text-amber-300">
                      Get matched with local fur-ends
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Smile className="h-5 w-5 text-amber-500 dark:text-amber-400" />
                    <span className="text-amber-700 dark:text-amber-300">
                      Schedule your first tail-wagging meetup
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Smile className="h-5 w-5 text-amber-500 dark:text-amber-400" />
                    <span className="text-amber-700 dark:text-amber-300">
                      Enjoy the cuddles and companionship!
                    </span>
                  </li>
                </ul>
                <Button className="mt-4 bg-amber-500 hover:bg-amber-600 text-white">
                  Become a PawPal
                </Button>
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/mananddog.jpg"
                  alt="A joyful elderly man petting a friendly golden retriever"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-amber-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200">
                About Us
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    className="text-sm text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400"
                    href="#"
                  >
                    Our Pawsome Mission
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400"
                    href="#"
                  >
                    Meet the Pack
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400"
                    href="#"
                  >
                    Join Our Kennel
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200">
                Fur-tastic Services
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    className="text-sm text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400"
                    href="#"
                  >
                    For Senior Friends
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400"
                    href="#"
                  >
                    For Dog Owners
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400"
                    href="#"
                  >
                    Yappy Hour Events
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200">
                Fetch More Info
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    className="text-sm text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400"
                    href="#"
                  >
                    Woof-worthy Blog
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400"
                    href="#"
                  >
                    FAQs (Fur-quently Asked Questions)
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400"
                    href="#"
                  >
                    Bark for Help
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200">
                The Fine Print
              </h3>
              <ul className="space-y-1">
                <li>
                  <a
                    className="text-sm text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400"
                    href="#"
                  >
                    Terms of Fur-vice
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400"
                    href="#"
                  >
                    Privacy Paw-licy
                  </a>
                </li>
                <li>
                  <a
                    className="text-sm text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400"
                    href="#"
                  >
                    Cookie Treats Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-amber-200 dark:border-amber-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-amber-700 dark:text-amber-300">
              © 2023 PawPals. All rights reserved. Tails are always wagging!
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a
                href="#"
                className="text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-amber-700 hover:text-amber-500 dark:text-amber-300 dark:hover:text-amber-400"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
