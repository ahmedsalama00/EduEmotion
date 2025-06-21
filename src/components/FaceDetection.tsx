import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Square, Play, Pause, Users, Smile, Frown, Meh, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FaceDetection = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [detectedFaces, setDetectedFaces] = useState(0);
  const [currentEmotion, setCurrentEmotion] = useState("Happy");
  const [attentionLevel, setAttentionLevel] = useState(85);
  const [students, setStudents] = useState([
    { id: 1, name: "8241001", emotion: "Happy", attention: 92, present: true },
    { id: 2, name: "8241002", emotion: "Focused", attention: 88, present: true },
    { id: 3, name: "8241003", emotion: "Neutral", attention: 75, present: true },
    { id: 4, name: "8241004", emotion: "Interested", attention: 94, present: false },
    { id: 5, name: "8241005", emotion: "Happy", attention: 89, present: true }
  ]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const startDetection = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      
      setIsRecording(true);
      setDetectedFaces(Math.floor(Math.random() * 5) + 1);
      
      toast({
        title: "Face Detection Started",
        description: "System is now analyzing emotions and focus levels",
      });

      // Simulate emotion detection updates
      const interval = setInterval(() => {
        const emotions = ["Happy", "Sad", "Neutral", "Focused", "Interested", "Tired"];
        setCurrentEmotion(emotions[Math.floor(Math.random() * emotions.length)]);
        setAttentionLevel(Math.floor(Math.random() * 40) + 60);
        setDetectedFaces(Math.floor(Math.random() * 5) + 1);
      }, 2000);

      return () => clearInterval(interval);
    } catch (error) {
      toast({
        title: "Camera Access Error",
        description: "Please allow camera access for the application",
        variant: "destructive"
      });
    }
  };

  const stopDetection = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsRecording(false);
    setDetectedFaces(0);
    
    toast({
      title: "Face Detection Stopped",
      description: "Data has been saved successfully",
    });
  };

  const getEmotionIcon = (emotion: string) => {
    switch (emotion) {
      case "Happy": return <Smile className="w-4 h-4 text-green-500" />;
      case "Sad": return <Frown className="w-4 h-4 text-red-500" />;
      case "Neutral": return <Meh className="w-4 h-4 text-yellow-500" />;
      default: return <Smile className="w-4 h-4 text-blue-500" />;
    }
  };

  const getAttentionColor = (level: number) => {
    if (level >= 80) return "text-green-500";
    if (level >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="py-8 px-6">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Face Detection & Emotion Analysis System
          </h2>
          <p className="text-gray-300 text-lg">
            Advanced AI technology for real-time student monitoring and emotion analysis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Video Feed */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Camera className="w-5 h-5 mr-2" />
                  Live Feed - Classroom Camera
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-black rounded-lg overflow-hidden">
                  <video
                    ref={videoRef}
                    className="w-full h-96 object-cover"
                    autoPlay
                    muted
                    playsInline
                  />
                  <canvas ref={canvasRef} className="hidden" />
                  
                  {/* Overlay UI */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between">
                    <Badge className={`${isRecording ? 'bg-red-500' : 'bg-gray-500'} text-white`}>
                      {isRecording ? 'Recording' : 'Stopped'}
                    </Badge>
                    <Badge className="bg-blue-500 text-white">
                      Detected Faces: {detectedFaces}
                    </Badge>
                  </div>

                  {/* Face detection boxes simulation */}
                  {isRecording && (
                    <div className="absolute inset-0">
                      <div className="absolute top-16 left-16 w-24 h-24 border-2 border-green-400 rounded animate-pulse">
                        <div className="bg-green-400 text-black text-xs px-1 rounded absolute -top-5 left-0">
                          {currentEmotion}
                        </div>
                      </div>
                      <div className="absolute top-20 right-20 w-20 h-20 border-2 border-blue-400 rounded animate-pulse">
                        <div className="bg-blue-400 text-black text-xs px-1 rounded absolute -top-5 right-0">
                          Happy
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-center mt-4 space-x-4">
                  {!isRecording ? (
                    <Button 
                      onClick={startDetection}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-2"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Start Detection
                    </Button>
                  ) : (
                    <Button 
                      onClick={stopDetection}
                      className="bg-red-500 hover:bg-red-600 text-white px-6 py-2"
                    >
                      <Square className="w-4 h-4 mr-2" />
                      Stop Detection
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Live Statistics */}
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Live Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-500/20 rounded-lg">
                  <div className="text-sm text-gray-300 mb-1">Dominant Emotion</div>
                  <div className="flex items-center">
                    {getEmotionIcon(currentEmotion)}
                    <span className="text-lg font-bold text-white ml-2">{currentEmotion}</span>
                  </div>
                </div>

                <div className="p-4 bg-green-500/20 rounded-lg">
                  <div className="text-sm text-gray-300 mb-1">Overall Focus Level</div>
                  <div className={`text-2xl font-bold ${getAttentionColor(attentionLevel)}`}>
                    {attentionLevel}%
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${attentionLevel}%` }}
                    ></div>
                  </div>
                </div>

                <div className="p-4 bg-purple-500/20 rounded-lg">
                  <div className="text-sm text-gray-300 mb-1">Present Students</div>
                  <div className="text-2xl font-bold text-white">
                    {students.filter(s => s.present).length} / {students.length}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Student List
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {students.map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <div className="text-white font-medium">{student.name}</div>
                        <div className="flex items-center mt-1">
                          {getEmotionIcon(student.emotion)}
                          <span className="text-sm text-gray-300 ml-1">{student.emotion}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={student.present ? "bg-green-500" : "bg-red-500"}>
                          {student.present ? "Present" : "Absent"}
                        </Badge>
                        <div className={`text-sm font-bold mt-1 ${getAttentionColor(student.attention)}`}>
                          {student.attention}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceDetection;
