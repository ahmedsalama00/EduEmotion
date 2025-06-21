
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';
import { TrendingUp, Users, Clock, Smile, Brain, Calendar, Eye, AlertCircle } from "lucide-react";

const StudentDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  // Sample data for charts
  const emotionData = [
    { name: 'Happy', value: 45, color: '#10B981' },
    { name: 'Neutral', value: 30, color: '#F59E0B' },
    { name: 'Focused', value: 20, color: '#3B82F6' },
    { name: 'Tired', value: 5, color: '#EF4444' }
  ];

  const weeklyAttention = [
    { day: 'Monday', attention: 85, engagement: 78 },
    { day: 'Tuesday', attention: 92, engagement: 88 },
    { day: 'Wednesday', attention: 78, engagement: 72 },
    { day: 'Thursday', attention: 88, engagement: 85 },
    { day: 'Friday', attention: 95, engagement: 92 },
    { day: 'Saturday', attention: 82, engagement: 79 },
    { day: 'Sunday', attention: 90, engagement: 86 }
  ];

  const hourlyData = [
    { time: '8:00', students: 15, avgAttention: 85 },
    { time: '9:00', students: 22, avgAttention: 90 },
    { time: '10:00', students: 28, avgAttention: 88 },
    { time: '11:00', students: 25, avgAttention: 82 },
    { time: '12:00', students: 18, avgAttention: 75 },
    { time: '1:00', students: 20, avgAttention: 78 },
    { time: '2:00', students: 24, avgAttention: 85 }
  ];

  const classPerformance = [
    { subject: 'Physics', satisfaction: 88, attention: 92, participation: 85 },
    { subject: 'Math', satisfaction: 92, attention: 89, participation: 90 },
    { subject: 'English', satisfaction: 85, attention: 87, participation: 82 },
    { subject: 'Data Science', satisfaction: 78, attention: 80, participation: 75 },
    { subject: 'Programming', satisfaction: 82, attention: 85, participation: 78 },
    { subject: 'Logic Design', satisfaction: 86, attention: 88, participation: 84 }
  ];

  const topStudents = [
    { name: "Sarah Johnson", avgAttention: 94, totalHours: 28, emotionScore: 92 },
    { name: "Ahmed Hassan", avgAttention: 91, totalHours: 26, emotionScore: 89 },
    { name: "Emma Wilson", avgAttention: 89, totalHours: 30, emotionScore: 87 },
    { name: "Mohammed Ali", avgAttention: 87, totalHours: 24, emotionScore: 85 },
    { name: "Lisa Chen", avgAttention: 85, totalHours: 22, emotionScore: 83 }
  ];

  return (
    <div className="py-8 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-2">
                Student Dashboard & Analytics
              </h2>
              <p className="text-gray-300 text-lg">
                Comprehensive analysis of student performance, focus levels, and emotions
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-40 bg-white/10 border-white/20 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="day">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-md border-blue-400/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-300 text-sm mb-1">Average Focus</p>
                    <p className="text-3xl font-bold text-white">87.5%</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                      <span className="text-green-400 text-sm">+5.2%</span>
                    </div>
                  </div>
                  <Brain className="w-10 h-10 text-blue-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-md border-green-400/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-300 text-sm mb-1">Active Students</p>
                    <p className="text-3xl font-bold text-white">156</p>
                    <div className="flex items-center mt-2">
                      <Users className="w-4 h-4 text-blue-400 mr-1" />
                      <span className="text-blue-400 text-sm">of 180</span>
                    </div>
                  </div>
                  <Users className="w-10 h-10 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-md border-purple-400/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-300 text-sm mb-1">Happiness Rate</p>
                    <p className="text-3xl font-bold text-white">8.4/10</p>
                    <div className="flex items-center mt-2">
                      <Smile className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-yellow-400 text-sm">Excellent</span>
                    </div>
                  </div>
                  <Smile className="w-10 h-10 text-purple-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-md border-orange-400/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-300 text-sm mb-1">Learning Hours</p>
                    <p className="text-3xl font-bold text-white">1,247</p>
                    <div className="flex items-center mt-2">
                      <Clock className="w-4 h-4 text-green-400 mr-1" />
                      <span className="text-green-400 text-sm">This Month</span>
                    </div>
                  </div>
                  <Clock className="w-10 h-10 text-orange-400" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Weekly Attention Trend */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                Weekly Attention Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={weeklyAttention}>
                  <defs>
                    <linearGradient id="colorAttention" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="day" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 24, 39, 0.8)', 
                      border: '1px solid rgba(75, 85, 99, 0.3)',
                      borderRadius: '8px',
                      color: 'white'
                    }} 
                  />
                  <Area type="monotone" dataKey="attention" stroke="#3B82F6" fillOpacity={1} fill="url(#colorAttention)" />
                  <Area type="monotone" dataKey="engagement" stroke="#10B981" fillOpacity={1} fill="url(#colorEngagement)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Emotion Distribution */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Smile className="w-5 h-5 mr-2" />
                Emotion Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={emotionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {emotionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 24, 39, 0.8)', 
                      border: '1px solid rgba(75, 85, 99, 0.3)',
                      borderRadius: '8px',
                      color: 'white'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Hourly Activity */}
          <Card className="lg:col-span-2 bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Daily Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(17, 24, 39, 0.8)', 
                      border: '1px solid rgba(75, 85, 99, 0.3)',
                      borderRadius: '8px',
                      color: 'white'
                    }} 
                  />
                  <Bar dataKey="students" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="avgAttention" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Performing Students */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                Top Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topStudents.map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <div className="font-medium text-white">{student.name}</div>
                      <div className="text-sm text-gray-300">
                        {student.totalHours} hours
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-gradient-to-r from-blue-500 to-green-500 text-white mb-1">
                        {student.avgAttention}%
                      </Badge>
                      <div className="text-xs text-gray-400">
                        Focus
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Class Performance Comparison */}
        <Card className="mt-8 bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              Subject Performance Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={classPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="subject" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(17, 24, 39, 0.8)', 
                    border: '1px solid rgba(75, 85, 99, 0.3)',
                    borderRadius: '8px',
                    color: 'white'
                  }} 
                />
                <Bar dataKey="satisfaction" fill="#F59E0B" name="Satisfaction" radius={[2, 2, 0, 0]} />
                <Bar dataKey="attention" fill="#3B82F6" name="Attention" radius={[2, 2, 0, 0]} />
                <Bar dataKey="participation" fill="#10B981" name="Participation" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;