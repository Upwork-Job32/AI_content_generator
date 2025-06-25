"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  Download,
  Play,
  Pause,
  RotateCcw,
  Image as ImageIcon,
  Type,
  Palette,
  Wand2,
  Star,
  X,
} from "lucide-react";

type InputMode = "prompt" | "image";
type GenerationStep = "input" | "generating" | "result";

export default function Dashboard() {
  const [inputMode, setInputMode] = useState<InputMode>("prompt");
  const [step, setStep] = useState<GenerationStep>("input");
  const [modelPrompt, setModelPrompt] = useState("");
  const [modelImage, setModelImage] = useState<File | null>(null);
  const [clothingImage, setClothingImage] = useState<File | null>(null);
  const [effectPrompt, setEffectPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: (file: File | null) => void
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setter(file);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    setStep("generating");

    // Simulate generation process
    setTimeout(() => {
      setGeneratedVideo("/sample-video.mp4"); // This would be your actual generated video
      setStep("result");
      setIsGenerating(false);
    }, 3000);
  };

  const handleDownload = () => {
    // Implement download functionality
    console.log("Downloading video...");
  };

  const resetForm = () => {
    setStep("input");
    setModelPrompt("");
    setModelImage(null);
    setClothingImage(null);
    setEffectPrompt("");
    setGeneratedVideo(null);
    setIsPlaying(false);
  };

  const samplePrompts = [
    "Young woman with long dark hair, confident pose, studio lighting",
    "Male model with casual style, natural expression, outdoor setting",
    "Fashion model with editorial look, dramatic lighting, high fashion pose",
  ];

  const sampleEffects = [
    "Walking in a modern city street at sunset, confident stride, wind blowing hair, cinematic lighting",
    "Elegant runway walk with spotlight, fashion show atmosphere, graceful movements",
    "Casual street photography style, natural movements, golden hour lighting",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
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

      {/* Header */}
      <header className="relative z-10 p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  FashionAI
                </span>
                <span className="text-white"> Studio</span>
              </h1>
              <p className="text-slate-300 text-sm md:text-lg">
                Create stunning fashion content with AI
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-slate-300 text-sm">4.9/5</span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 pb-12">
        <AnimatePresence mode="wait">
          {step === "input" && (
            <motion.div
              key="input"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Step 1: Model Input */}
              <div className="glass rounded-2xl p-6 md:p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-white">
                    Model Reference
                  </h2>
                </div>

                {/* Toggle between prompt and image */}
                <div className="flex gap-2 mb-6 overflow-x-auto">
                  <button
                    onClick={() => setInputMode("prompt")}
                    className={`px-4 md:px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                      inputMode === "prompt"
                        ? "bg-purple-500 text-white shadow-lg"
                        : "bg-white/10 text-slate-300 hover:bg-white/20"
                    }`}
                  >
                    <Type className="w-4 h-4 inline mr-2" />
                    Text Prompt
                  </button>
                  <button
                    onClick={() => setInputMode("image")}
                    className={`px-4 md:px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                      inputMode === "image"
                        ? "bg-purple-500 text-white shadow-lg"
                        : "bg-white/10 text-slate-300 hover:bg-white/20"
                    }`}
                  >
                    <ImageIcon className="w-4 h-4 inline mr-2" />
                    Upload Image
                  </button>
                </div>

                {inputMode === "prompt" ? (
                  <div className="space-y-4">
                    <textarea
                      value={modelPrompt}
                      onChange={(e) => setModelPrompt(e.target.value)}
                      placeholder="Describe your ideal model... (e.g., 'Young woman with long dark hair, confident pose, studio lighting')"
                      className="w-full h-32 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-sm md:text-base"
                    />
                    <div className="space-y-2">
                      <p className="text-slate-400 text-sm">
                        Quick suggestions:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {samplePrompts.map((prompt, index) => (
                          <button
                            key={index}
                            onClick={() => setModelPrompt(prompt)}
                            className="text-xs md:text-sm px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 hover:bg-white/10 transition-colors"
                          >
                            {prompt.length > 50
                              ? `${prompt.substring(0, 50)}...`
                              : prompt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative border-2 border-dashed border-white/30 rounded-xl p-6 md:p-8 text-center hover:border-purple-400 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, setModelImage)}
                      className="hidden"
                      id="model-upload"
                    />

                    {modelImage ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Upload className="w-6 h-6 text-green-400" />
                            <div className="text-left">
                              <p className="text-white font-medium text-sm md:text-base">
                                {modelImage.name}
                              </p>
                              <p className="text-green-400 text-xs md:text-sm">
                                Image uploaded successfully
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => setModelImage(null)}
                            className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-full transition-colors"
                            title="Remove image"
                          >
                            <X className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <label htmlFor="model-upload" className="cursor-pointer">
                        <Upload className="w-8 md:w-12 h-8 md:h-12 text-slate-400 mx-auto mb-4" />
                        <p className="text-white font-medium text-sm md:text-base">
                          Upload model reference image
                        </p>
                        <p className="text-slate-400 text-xs md:text-sm mt-2">
                          PNG, JPG up to 10MB
                        </p>
                      </label>
                    )}
                  </div>
                )}
              </div>

              {/* Step 2: Clothing Design */}
              <div className="glass rounded-2xl p-6 md:p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-white">
                    Clothing Design
                  </h2>
                </div>

                <div className="relative border-2 border-dashed border-white/30 rounded-xl p-6 md:p-8 text-center hover:border-purple-400 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, setClothingImage)}
                    className="hidden"
                    id="clothing-upload"
                  />

                  {clothingImage ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Palette className="w-6 h-6 text-green-400" />
                          <div className="text-left">
                            <p className="text-white font-medium text-sm md:text-base">
                              {clothingImage.name}
                            </p>
                            <p className="text-green-400 text-xs md:text-sm">
                              Design uploaded successfully
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => setClothingImage(null)}
                          className="p-2 bg-red-500/20 hover:bg-red-500/30 rounded-full transition-colors"
                          title="Remove image"
                        >
                          <X className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <label htmlFor="clothing-upload" className="cursor-pointer">
                      <Palette className="w-8 md:w-12 h-8 md:h-12 text-slate-400 mx-auto mb-4" />
                      <p className="text-white font-medium text-sm md:text-base">
                        Upload clothing design or sketch
                      </p>
                      <p className="text-slate-400 text-xs md:text-sm mt-2">
                        Sketches, photos, or design references
                      </p>
                    </label>
                  )}
                </div>
              </div>

              {/* Step 3: Effects & Actions */}
              <div className="glass rounded-2xl p-6 md:p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-white">
                    Scene & Effects
                  </h2>
                </div>

                <div className="space-y-4">
                  <textarea
                    value={effectPrompt}
                    onChange={(e) => setEffectPrompt(e.target.value)}
                    placeholder="Describe the scene, mood, and actions... (e.g., 'Walking in a modern city street at sunset, confident stride, wind blowing hair, cinematic lighting')"
                    className="w-full h-32 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none text-sm md:text-base"
                  />
                  <div className="space-y-2">
                    <p className="text-slate-400 text-sm">Scene suggestions:</p>
                    <div className="flex flex-wrap gap-2">
                      {sampleEffects.map((effect, index) => (
                        <button
                          key={index}
                          onClick={() => setEffectPrompt(effect)}
                          className="text-xs md:text-sm px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-slate-300 hover:bg-white/10 transition-colors"
                        >
                          {effect.length > 50
                            ? `${effect.substring(0, 50)}...`
                            : effect}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Generate Button */}
              <div className="text-center">
                <button
                  onClick={handleGenerate}
                  disabled={
                    (!modelPrompt && !modelImage) ||
                    !clothingImage ||
                    !effectPrompt
                  }
                  className="w-full md:w-auto px-8 md:px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none btn-luxury"
                >
                  <Wand2 className="w-5 h-5 inline mr-2" />
                  Generate AI Fashion Video
                </button>
              </div>
            </motion.div>
          )}

          {step === "generating" && (
            <motion.div
              key="generating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12 md:py-20"
            >
              <div className="glass rounded-2xl p-8 md:p-12 max-w-md mx-auto border border-white/20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-12 md:w-16 h-12 md:h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  Creating Your Fashion Video
                </h3>
                <p className="text-slate-300 text-sm md:text-base">
                  AI is crafting your unique fashion content...
                </p>
                <div className="mt-6 space-y-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xs md:text-sm text-slate-400"
                  >
                    Processing model...
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="text-xs md:text-sm text-slate-400"
                  >
                    Applying clothing design...
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="text-xs md:text-sm text-slate-400"
                  >
                    Generating scene effects...
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {step === "result" && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6 md:space-y-8"
            >
              {/* Generated Video */}
              <div className="glass rounded-2xl p-6 md:p-8 border border-white/20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-white">
                    Your AI Fashion Video
                  </h2>
                  <div className="flex gap-3">
                    <button
                      onClick={resetForm}
                      className="px-4 md:px-6 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors text-sm md:text-base"
                    >
                      <RotateCcw className="w-4 h-4 inline mr-2" />
                      Create New
                    </button>
                    <button
                      onClick={handleDownload}
                      className="px-4 md:px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all btn-luxury text-sm md:text-base"
                    >
                      <Download className="w-4 h-4 inline mr-2" />
                      Download
                    </button>
                  </div>
                </div>

                <div className="relative bg-black rounded-xl overflow-hidden aspect-video max-w-4xl mx-auto">
                  {/* Video placeholder - replace with actual video element */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-16 md:w-20 h-16 md:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-colors"
                        onClick={() => setIsPlaying(!isPlaying)}
                      >
                        {isPlaying ? (
                          <Pause className="w-6 md:w-8 h-6 md:h-8 text-white" />
                        ) : (
                          <Play className="w-6 md:w-8 h-6 md:h-8 text-white ml-1" />
                        )}
                      </motion.div>
                      <p className="text-white font-medium text-sm md:text-base">
                        AI-Generated Fashion Video
                      </p>
                      <p className="text-slate-300 text-xs md:text-sm">
                        Click to play/pause
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="glass rounded-xl p-4 md:p-6 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">
                    Model
                  </h3>
                  <p className="text-slate-300 text-xs md:text-sm">
                    {inputMode === "prompt"
                      ? modelPrompt.length > 60
                        ? `${modelPrompt.substring(0, 60)}...`
                        : modelPrompt
                      : "Custom uploaded image"}
                  </p>
                </div>
                <div className="glass rounded-xl p-4 md:p-6 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">
                    Design
                  </h3>
                  <p className="text-slate-300 text-xs md:text-sm">
                    {clothingImage?.name || "Clothing design"}
                  </p>
                </div>
                <div className="glass rounded-xl p-4 md:p-6 border border-white/20">
                  <h3 className="font-semibold text-white mb-2 text-sm md:text-base">
                    Scene
                  </h3>
                  <p className="text-slate-300 text-xs md:text-sm">
                    {effectPrompt.length > 60
                      ? `${effectPrompt.substring(0, 60)}...`
                      : effectPrompt}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 md:py-8 text-slate-400 relative z-10">
        <p className="text-xs md:text-sm">
          &copy; 2024 FashionAI Studio. Powered by advanced AI technology.
        </p>
      </footer>
    </div>
  );
}
