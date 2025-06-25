"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Video,
  Camera,
  Wand2,
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "AI Video Generation",
      description: "Create stunning fashion videos with advanced AI technology",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "No Photoshoot Needed",
      description: "Generate professional content without cameras or studios",
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "Smart Controls",
      description: "Fine-tune every aspect with ControlNet and IPAdapter",
    },
  ];

  const stats = [
    { number: "10K+", label: "Creators" },
    { number: "50K+", label: "Videos Generated" },
    { number: "99%", label: "Satisfaction Rate" },
  ];

  const showcaseItems = [
    {
      type: "video",
      src: "/first/hunyuan_image-to-video-0003.mp4",
      title: "AI Video Generation",
      description:
        "Transform static images into dynamic fashion videos with AI",
    },
    {
      type: "image",
      src: "/first/catvton-advanced-ai-virtual-try-on-1152.thumbnail_512.webp",
      title: "Virtual Try-On",
      description: "Advanced AI virtual try-on technology for perfect fitting",
    },
    {
      type: "image",
      src: "/first/comfyui-flux-inpainting-workflow-1120.thumbnail_512.webp",
      title: "AI Workflow",
      description: "Professional AI workflows for fashion content creation",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                FashionAI
              </span>
              <span className="text-white"> Studio</span>
            </h1>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => router.push("/dashboard")}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all btn-luxury"
          >
            Get Started
            <ArrowRight className="w-4 h-4 inline ml-2" />
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-slate-300 text-sm">
                Powered by Stable Diffusion XL & ControlNet
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Create Fashion Content
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Without Limits
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Transform your creative vision into stunning fashion videos using
              cutting-edge AI. No cameras, no studios, no limits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={() => router.push("/dashboard")}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all transform hover:scale-105 btn-luxury"
            >
              <Wand2 className="w-5 h-5 inline mr-2" />
              Start Creating Now
            </button>

            <button className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all">
              Watch Demo
              <Video className="w-5 h-5 inline ml-2" />
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mb-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-xs md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            See What Our AI Can Create
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real examples of fashion content generated by our advanced AI
            technology
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Showcase Slider */}
          <div className="relative overflow-hidden rounded-3xl bg-black/50 backdrop-blur-lg border border-white/20">
            <div className="aspect-video relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  {showcaseItems[currentSlide].type === "video" ? (
                    <div className="relative w-full h-full">
                      <video
                        src={showcaseItems[currentSlide].src}
                        className="w-full h-full object-cover rounded-3xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={showcaseItems[currentSlide].src}
                      alt={showcaseItems[currentSlide].title}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  )}

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8 rounded-b-3xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {showcaseItems[currentSlide].title}
                    </h3>
                    <p className="text-slate-300 text-sm md:text-base">
                      {showcaseItems[currentSlide].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? "bg-purple-500 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {showcaseItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative aspect-video rounded-xl overflow-hidden transition-all ${
                  index === currentSlide
                    ? "ring-2 ring-purple-500 scale-105"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white text-xs md:text-sm font-medium text-center px-2">
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to Create
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional-grade AI tools designed specifically for fashion
            creators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.2 }}
              className="glass rounded-2xl p-6 md:p-8 border border-white/20 text-center hover:border-purple-400/50 transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Simple 3-Step Process
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From concept to creation in minutes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              step: "1",
              title: "Model Reference",
              desc: "Upload an image or describe your ideal model with text prompts",
            },
            {
              step: "2",
              title: "Clothing Design",
              desc: "Upload your fashion designs, sketches, or reference photos",
            },
            {
              step: "3",
              title: "Generate Video",
              desc: "Add scene details and let AI create your fashion video",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + index * 0.2 }}
              className="relative"
            >
              <div className="glass rounded-2xl p-6 md:p-8 border border-white/20 h-full">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-purple-400" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
          className="glass rounded-3xl p-8 md:p-12 border border-white/20 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-slate-300">Trusted by 10,000+ creators</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Creative Process?
          </h2>

          <p className="text-xl text-slate-300 mb-8">
            Join thousands of fashion creators already using FashionAI Studio
          </p>

          <button
            onClick={() => router.push("/dashboard")}
            className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all transform hover:scale-105 btn-luxury"
          >
            <Wand2 className="w-5 h-5 inline mr-2" />
            Start Creating for Free
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-400 relative z-10">
        <p className="text-sm">
          &copy; 2024 FashionAI Studio. Powered by advanced AI technology.
        </p>
      </footer>
    </div>
  );
}
