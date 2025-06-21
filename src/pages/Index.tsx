
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Camera, BarChart3, Download, Users, TrendingUp, Eye, Smile, AlertCircle, CheckCircle2 } from "lucide-react";
import FaceDetection from "@/components/FaceDetection";
import StudentDashboard from "@/components/StudentDashboard";
import ExportData from "@/components/ExportData";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const features = [
    {
      icon: <Camera className="w-12 h-12 text-blue-500" />,
      title: "Advanced Face Detection",
      description: "Advanced AI technology for real-time face detection with high accuracy"
    },
    {
      icon: <Smile className="w-12 h-12 text-green-500" />,
      title: "Emotion Analysis",
      description: "Analyzes student emotions and predicts their psychological state during study"
    },
    {
      icon: <Eye className="w-12 h-12 text-purple-500" />,
      title: "Focus Monitoring",
      description: "Tracks student focus levels and provides detailed reports"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-orange-500" />,
      title: "Advanced Statistics",
      description: "Comprehensive charts and analytics for student performance over time"
    },
    {
      icon: <Users className="w-12 h-12 text-red-500" />,
      title: "Attendance Management",
      description: "Automatically tracks student attendance with accurate time recording"
    },
    {
      icon: <Download className="w-12 h-12 text-cyan-500" />,
      title: "Data Export",
      description: "Export all data and reports in various formats"
    }
  ];

  const stats = [
    { label: "Accuracy Rate", value: "98.5%", icon: <CheckCircle2 className="w-5 h-5" /> },
    { label: "Registered Students", value: "2,847", icon: <Users className="w-5 h-5" /> },
    { label: "Completed Sessions", value: "15,692", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Analytics Available", value: "24/7", icon: <Brain className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 text-white" dir="ltr">
      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/10 border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Brain className="w-8 h-8 text-blue-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                EduEmotion AI
              </h1>
            </div>
            <div className="flex space-x-4">
              <Button
                variant={activeTab === "home" ? "default" : "ghost"}
                onClick={() => setActiveTab("home")}
                className="text-white hover:bg-white/20"
              >
                Home
              </Button>
              <Button
                variant={activeTab === "detection" ? "default" : "ghost"}
                onClick={() => setActiveTab("detection")}
                className="text-white hover:bg-white/20"
              >
                Face Detection
              </Button>
              <Button
                variant={activeTab === "dashboard" ? "default" : "ghost"}
                onClick={() => setActiveTab("dashboard")}
                className="text-white hover:bg-white/20"
              >
                Dashboard
              </Button>
              <Button
                variant={activeTab === "export" ? "default" : "ghost"}
                onClick={() => setActiveTab("export")}
                className="text-white hover:bg-white/20"
              >
                Export Data
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Home Tab */}
      {activeTab === "home" && (
        <>
          {/* Hero Section */}
          <section className="py-20 px-6">
            <div className="container mx-auto text-center">
              <div className="animate-fade-in">
                <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-400/30 px-4 py-2 text-sm">
                  Advanced AI Technology
                </Badge>
                <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
                  Future of Student Emotion Analysis
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Advanced system using artificial intelligence for face detection and student emotion analysis, 
                  with comprehensive statistics and real-time focus monitoring
                </p>
                <div className="flex justify-center space-x-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-3 text-lg rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                    onClick={() => setActiveTab("detection")}
                  >
                    <Camera className="mr-2 w-5 h-5" />
                    Start Analysis Now
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                    onClick={() => setActiveTab("dashboard")}
                  >
                    <BarChart3 className="mr-2 w-5 h-5" />
                    View Statistics
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-6">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-3 text-blue-400">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-6">
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Key Features
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Advanced technologies for comprehensive and accurate analysis of student emotions and focus
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="group bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                    <CardHeader className="text-center pb-4">
                      <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-white mb-2">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-center leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-6">
            <div className="container mx-auto">
              <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border-purple-300/30 text-center p-12 shadow-2xl">
                <CardContent className="space-y-6">
                  <AlertCircle className="w-16 h-16 text-purple-400 mx-auto" />
                  <h3 className="text-3xl font-bold text-white">
                    Ready to Experience the Future?
                  </h3>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Start using the AI emotion analysis system and discover how learning can be improved
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-12 py-4 text-xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                    onClick={() => setActiveTab("detection")}
                  >
                    Start Now for Free
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </>
      )}

      {/* Face Detection Tab */}
      {activeTab === "detection" && <FaceDetection />}

      {/* Dashboard Tab */}
      {activeTab === "dashboard" && <StudentDashboard />}

      {/* Export Tab */}
      {activeTab === "export" && <ExportData />}

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-white/20 py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center mb-4">
            <Brain className="w-6 h-6 text-blue-400 mr-2" />
            <span className="text-lg font-semibold">EduEmotion AI</span>
          </div>
          <p className="text-gray-400">
            © 2025 EduEmotion AI - All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;