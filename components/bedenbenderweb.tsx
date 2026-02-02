"use client";
import {
  Car,
  Wrench,
  User,
  MessageCircle,
  ShieldCheck,
  Phone,
  Mail,
  CalendarDays,
  Calendar,
  Facebook,
  CheckCircle,
  
} from "lucide-react";
import { motion } from "framer-motion";


export default function Bedenbenderweb() {
function ContactButton({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-5 w-full max-w-sm bg-sky-500 hover:bg-sky-400 transition rounded-2xl px-8 py-6 text-white font-semibold"
    >
      <span className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
        {icon}
      </span>
      {text}
    </a>
  );
}

function StepCard({
  step,
  icon,
  title,
  text,
}: {
  step: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="relative bg-zinc-800/90 backdrop-blur-xl rounded-2xl p-10 text-left shadow-xl border border-white/10">
      
      {/* STEP NUMBER */}
      <div className="absolute -top-6 -left-6 w-14 h-14 rounded-full bg-sky-500 flex items-center justify-center font-extrabold text-white text-lg shadow-lg ring-4 ring-sky-400/40">
       {step}
      </div>

      {/* ICON */}
      <div className="mb-6 text-sky-400">{icon}</div>

      {/* TITLE */}
      <h3 className="text-xl font-bold mb-4">{title}</h3>

      {/* DESCRIPTION */}
      <p className="text-zinc-300 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}

  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* ================= HERO ================= */}
     <section id="home"className="relative min-h-[90vh] flex items-center overflow-hidden">
        <img
          src="/images/hero.png"
          alt="Mobile Auto Repair"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-transparent" />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <span className="inline-block mb-6 px-5 py-2 rounded-full bg-sky-500/20 text-sky-400 text-sm font-semibold">
                #Number 1 Mobile Automotive Service
              </span>

              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Fast, Reliable Auto Repair
                <span className="block text-sky-400">
                  Delivered Right to Your Door
                </span>
              </h1>

              <p className="mt-6 text-zinc-300 text-lg max-w-3xl">
                Professional mobile auto repair delivered directly to your
                location. No shops, no waiting just honest and reliable service.
              </p>

              <div className="mt-10 flex gap-4 flex-wrap">
                <a
                  href="https://wa.me/15632991817"
                  className="px-8 py-4 bg-sky-500 hover:bg-sky-400 rounded-lg font-semibold transition"
                >
                  Schedule an Appointment →
                </a>
                <a
                  href="tel:15632991817"
                  className="px-8 py-4 border border-white/20 rounded-lg"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* ================= WHO ARE WE ================= */}
<section id="about" className="py-20 lg:py-32">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

    {/* LEFT TEXT – ANIMATE FROM LEFT */}
   <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false }}
  className="
  relative
  bg-gradient-to-br from-zinc-800/90 to-zinc-900/95
  p-10
  rounded-3xl
  border border-sky-500/30
"
>
      <h2 className="text-4xl font-bold text-sky-400 mb-6">
        Who Are We?
      </h2>
      
<p className="text-zinc-300 leading-relaxed">

        At <strong>Bedenbender Mobile Automotive</strong>, we’re committed
        to delivering top-quality mobile auto repair you can trust.
      </p>

      <p className="mt-4 text-zinc-300">
        <span className="text-sky-400 font-semibold">
          Our mission is not only to keep your vehicle running safely and
          reliably,
        </span>{" "}
        but also to educate every customer so you understand the work being
        done and feel confident on the road.
      </p>
    </motion.div>

    {/* RIGHT IMAGE – ANIMATE FROM RIGHT */}
    <motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
  viewport={{ once: false }}
>
      <img
      src="/images/about-1.png"
      alt="Mechanic at work"
      className="w-full h-auto object-contain rounded-2xl"
      />
    </motion.div>

  </div>
</section>

      {/* ================= ABOUT OWNER ================= */}
<section className="py-32 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* IMAGE — SLIDE FROM LEFT */}
    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false }}
      className="relative w-full max-w-sm mx-auto mt-8 lg:mt-0"
    >
      <img
        src="/images/owner.png"
        alt="Logan Bedenbender"
        className="w-full h-auto object-contain rounded-2xl"
      />
    </motion.div>

    {/* TEXT — SLIDE FROM RIGHT */}
    <motion.div
      initial={{ opacity: 0, x: 120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
      viewport={{ once: false }}
      className="bg-zinc-900/80 p-10 rounded-3xl border border-sky-500/30"
    >
      <h2 className="text-4xl font-bold text-sky-400 mb-4">
        A little bit about me
      </h2>

      <p className="text-zinc-300">
        <span className="text-sky-400 font-semibold">
          My name is Logan Bedenbender
        </span>
        , owner of Bedenbender Mobile Auto. I’ve always been passionate
        about cars and engines, and that passion drives my work every day.
      </p>

      <p className="mt-4 text-zinc-300">
        I started this business to provide honest, reliable, and affordable
        mobile auto repair without the stress or high costs of traditional
        shops.
      </p>

      <p className="mt-4 text-zinc-300">
        My goal is simple: keep your vehicle running smoothly while giving
        you confidence and peace of mind.
      </p>
    </motion.div>

  </div>
</section>

{/* ================= OUR SERVICES ================= */}
<section
  id="services"
  className="relative py-32 overflow-hidden"
>
  {/* BACKGROUND */}
  <div className="absolute inset-0 z-0">
  <img
    src="/images/service-bg.png"
    alt="Services background"
    className="w-full h-full object-cover object-center blur-md opacity-40"
  />
 <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
</div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold">
        Our <span className="text-sky-400">Services</span>
      </h2>

      <p className="mt-5 text-zinc-300 max-w-2xl mx-auto leading-relaxed">
        Owner of Bedenbender Mobile Auto. I’ve always been passionate
        about cars and engines, and that passion drives my work every day.
      </p>
    </motion.div>

    {/* SERVICE CARDS */}
    <div className="grid md:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <ServiceCard
        delay={0}
        title="Maintenance"
        icon={<Wrench size={28} />}
        items={[
          "Oil Changes",
          "Tire Rotation",
          "Brake Service",
          "Air Filters",
          "Fluid Checks",
        ]}
      />

      {/* CARD 2 */}
      <ServiceCard
        delay={0.15}
        title="Suspension"
        icon={<Car size={28} />}
        items={[
          "Struts & Shocks",
          "Control Arms",
          "Sway Bars & Links",
          "Wheel Bearings",
          "Alignment Checks",
        ]}
      />

      {/* CARD 3 */}
      <ServiceCard
        delay={0.3}
        title="Basic Engine Work"
        icon={<User size={28} />}
        items={[
          "Spark Plugs",
          "Coil Packs",
        ]}
      />

    </div>
  </div>
</section>


      {/* ================= WHY CHOOSE US ================= */}
<section id="services" className="relative py-28 bg-black overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT — IMAGE FROM LEFT */}
    <motion.div
      initial={{ opacity: 0, x: -120 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <span className="text-sky-400 font-semibold block mb-3">
        Choose Comfort, Choose Us
      </span>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Why choose <span className="text-white">Us?</span>
      </h2>

      <p className="text-zinc-400 max-w-md mb-10">
        Reliable auto repair, fair pricing, and quality work so you can
        drive worry free.
      </p>

      <div className="relative w-full max-w-lg h-[320px]">
        <img
          src="/images/view-3d-car.png"
          alt="Car"
          className="object-contain drop-shadow-2xl"
        />
      </div>
    </motion.div>

    {/* RIGHT — TEXT STAGGER (ONE BY ONE) */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      className="space-y-10"
    >

      {/* ITEM 1 */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex gap-5"
      >
        <Car size={36} className="text-sky-400" />
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Mobile Convenience
          </h3>
          <p className="text-zinc-400">
            We come to your home, work, or anywhere you need.
            No waiting rooms, no wasted time.
          </p>
        </div>
      </motion.div>

      {/* ITEM 2 */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex gap-5"
      >
        <ShieldCheck size={36} className="text-sky-400" />
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Quality You Can Trust
          </h3>
          <p className="text-zinc-400">
            Every service is done with care, precision, and attention
            to detail using proven methods.
          </p>
        </div>
      </motion.div>

      {/* ITEM 3 */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex gap-5"
      >
        <User size={36} className="text-sky-400" />
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Honest & Transparent Service
          </h3>
          <p className="text-zinc-400">
            No upselling, no hidden fees. You’ll always know
            what your car needs and why.
          </p>
        </div>
      </motion.div>

      {/* ITEM 4 */}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex gap-5"
      >
        <ShieldCheck size={36} className="text-sky-400" />
        <div>
          <h3 className="text-xl font-semibold mb-2">
            Customer First Approach
          </h3>
          <p className="text-zinc-400">
            We treat your car like our own. Your safety,
            satisfaction, and peace of mind come first.
          </p>
        </div>
      </motion.div>

    </motion.div>
  </div>
</section>

{/* ================= HOW TO ORDER ================= */}
<section className="relative py-32 overflow-hidden">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 -z-20">
    <img
      src="/images/how-to-order-bg.png"
      alt="How To Order"
      className="object-cover"
    />
  </div>

  {/* BLUE RADIAL GLOW */}
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.35),transparent_65%)]" />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 -z-10 bg-black/75" />

  {/* CONTENT */}
  <motion.div
    initial={{ opacity: 0, y: -60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
    className="relative z-10 max-w-7xl mx-auto px-6 text-center"
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      How To Order <span className="text-sky-400">Our Service?</span>
    </h2>

    <p className="text-zinc-300 max-w-3xl mx-auto mb-20">
      To book our service, simply send us a message on WhatsApp, share your
      vehicle details and location, and we’ll take care of the rest quick,
      straightforward, and hassle free.
    </p>

    <div className="grid md:grid-cols-3 gap-12">
      <StepCard
        step="01"
        title="Chat Us on WhatsApp"
        text="Send us a message with your name, vehicle type, issue, and location. No forms needed."
        icon={<MessageCircle size={32} />}
      />

      <StepCard
        step="02"
        title="Get a Quote & Schedule"
        text="We review your request, explain the service needed, provide transparent pricing, and schedule a time that works best for you."
        icon={<CalendarDays size={32} />}
      />

      <StepCard
        step="03"
        title="We Come & Fix Your Car"
        text="Our mobile mechanic comes to your location and gets the job done professionally, conveniently, and worry free."
        icon={<Car size={32} />}
      />
    </div>
  </motion.div>
</section>



{/* ================= GET IN TOUCH ================= */}
<section id="contact" className="relative py-32 bg-black overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* TITLE */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Get in <span className="text-sky-400">Touch</span> With Us
      </h2>
      <p className="text-zinc-400 max-w-3xl mx-auto">
        To book our service, simply send us a message on WhatsApp, share your
        vehicle details and location, and we’ll take care of the rest — quick,
        straightforward, and hassle free.
      </p>
    </motion.div>

    {/* CONTENT */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT IMAGE — dari kiri */}
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="relative flex justify-center"
      >
      <div className="absolute hidden md:block w-[420px] h-[420px] rounded-full border-2 border-dashed border-white/20" />

        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-2xl z-10">
          <img
            src="/images/contact.png"
            alt="Mechanic at work"
            className="w-full h-auto object-cover"
          />
        </div>
      </motion.div>

      {/* RIGHT BUTTONS — muncul satu-satu */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
       className="flex flex-col gap-6 w-full items-center max-w-md mx-auto lg:items-start lg:mx-0"
      >

        {/* FACEBOOK */}
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          href="https://www.facebook.com/people/Bedenbender-Mobile-Automotive/61582365656773/"
          target="_blank"
          rel="noopener noreferrer"
       className="w-full max-w-sm mx-auto flex items-center justify-start gap-4 bg-sky-500 hover:bg-sky-400 transition rounded-2xl pl-6 pr-6 py-5 text-white font-semibold"

        >
          <span className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
            <Facebook size={26} />
          </span>
          Facebook
        </motion.a>

        {/* WHATSAPP */}
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          href="https://wa.me/15632991817"
          target="_blank"
        className="w-full max-w-sm mx-auto flex items-center justify-start gap-4 bg-sky-500 hover:bg-sky-400 transition rounded-2xl pl-6 pr-6 py-5 text-white font-semibold"


        >
          <span className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
            <Phone size={26} />
          </span>
          WhatsApp
        </motion.a>

        {/* EMAIL */}
        <motion.a
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
       href="mailto:bedenbendermobileauto@gmail.com?subject=Service%20Booking&body=Hi%20Bedenbender%20Team,%0A%0AI%20want%20to%20book%20a%20service."
      className="w-full max-w-sm mx-auto flex items-center justify-start gap-4 bg-sky-500 hover:bg-sky-400 transition rounded-2xl pl-6 pr-6 py-5 text-white font-semibold"


        >
          <span className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
            <Mail size={26} />
          </span>
          Email
        </motion.a>

      </motion.div>
    </div>
  </div>
</section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function ServiceCard({
  title,
  icon,
  items,
  delay = 0,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="
        h-full
        bg-gradient-to-b 
        from-zinc-700/80 
        via-zinc-800/85 
        to-zinc-900/90
        backdrop-blur-xl
        rounded-2xl
        p-6 md:p-8
        text-white
        shadow-xl
        border border-white/10
      "
    >
      {/* ICON */}
      <div className="mb-4 md:mb-6 flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-sky-500/20 text-sky-400">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="text-lg md:text-xl font-bold mb-5 tracking-wide">
        {title}
      </h3>

      {/* LIST */}
      <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-zinc-200">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <CheckCircle size={18} className="text-sky-400 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
function ContactBtn({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 bg-sky-500 px-6 py-4 rounded-lg font-semibold">
      {icon}
      {text}
    </div>
  );
}
function StepCard({
  step,
  icon,
  title,
  text,
}: {
  step: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
  <div className="relative bg-zinc-800/90 backdrop-blur-xl rounded-2xl p-8 pt-12 shadow-xl border border-white/10">
      {/* STEP NUMBER */}
       <div className="absolute -top-5 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0
                w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center
                font-bold text-white ring-4 ring-sky-400/30">
  {step}
</div>

      {/* ICON */}
      <div className="mb-4 text-sky-400">{icon}</div>

      {/* TITLE */}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>

      {/* TEXT */}
      <p className="text-zinc-300 text-sm leading-relaxed">{text}</p>
    </div>
  );
}
