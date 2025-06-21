
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, FileText, Calendar, Users, BarChart3, CheckCircle2, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ExportData = () => {
  const [selectedFormat, setSelectedFormat] = useState("excel");
  const [selectedDateRange, setSelectedDateRange] = useState("month");
  const [selectedData, setSelectedData] = useState("all");
  const { toast } = useToast();

  const exportOptions = [
    { value: "excel", label: "Excel (.xlsx)", icon: <FileText className="w-4 h-4" /> },
    { value: "csv", label: "CSV (.csv)", icon: <FileText className="w-4 h-4" /> },
    { value: "pdf", label: "PDF Report (.pdf)", icon: <FileText className="w-4 h-4" /> },
    { value: "json", label: "JSON (.json)", icon: <FileText className="w-4 h-4" /> }
  ];

  const dataTypes = [
    { value: "all", label: "All Data", count: "2,847 students" },
    { value: "attendance", label: "Attendance Data", count: "15,692 records" },
    { value: "emotions", label: "Emotion Analysis", count: "8,934 analyses" },
    { value: "attention", label: "Focus Levels", count: "12,456 measurements" },
    { value: "statistics", label: "General Statistics", count: "245 reports" }
  ];

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: `File will be downloaded in ${selectedFormat.toUpperCase()} format soon`,
    });

    // Simulate export process
    setTimeout(() => {
      toast({
        title: "Export Completed",
        description: "File has been downloaded to your device",
      });
    }, 2000);
  };

  const recentExports = [
    { name: "Emotion Report - January 2024", date: "2024-01-15", format: "PDF", size: "2.3 MB" },
    { name: "Attendance Data - December 2023", date: "2024-01-10", format: "Excel", size: "4.7 MB" },
    { name: "Focus Statistics - November 2023", date: "2024-01-05", format: "CSV", size: "1.8 MB" },
    { name: "Comprehensive Report - October 2023", date: "2023-12-28", format: "JSON", size: "3.2 MB" }
  ];

  return (
    <div className="py-8 px-6">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Data Export & Reports
          </h2>
          <p className="text-gray-300 text-lg">
            Export student data and statistics in various formats for analysis and archiving
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Export Configuration */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Export Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Data Type Selection */}
                <div>
                  <label className="text-white font-medium mb-3 block">Data Type</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {dataTypes.map((type) => (
                      <div
                        key={type.value}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                          selectedData === type.value
                            ? 'border-blue-400 bg-blue-500/20'
                            : 'border-white/20 bg-white/5 hover:bg-white/10'
                        }`}
                        onClick={() => setSelectedData(type.value)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium">{type.label}</div>
                            <div className="text-gray-300 text-sm">{type.count}</div>
                          </div>
                          <CheckCircle2 
                            className={`w-5 h-5 ${
                              selectedData === type.value ? 'text-blue-400' : 'text-gray-500'
                            }`} 
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Format Selection */}
                <div>
                  <label className="text-white font-medium mb-3 block">File Format</label>
                  <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {exportOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          <div className="flex items-center">
                            {option.icon}
                            <span className="ml-2">{option.label}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Range */}
                <div>
                  <label className="text-white font-medium mb-3 block">Time Period</label>
                  <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">Last Week</SelectItem>
                      <SelectItem value="month">Last Month</SelectItem>
                      <SelectItem value="quarter">Last Quarter</SelectItem>
                      <SelectItem value="year">Last Year</SelectItem>
                      <SelectItem value="all">All Data</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Export Button */}
                <Button 
                  onClick={handleExport}
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white py-3 text-lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Export Data
                </Button>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Data Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-white">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2">Student Name</th>
                        <th className="text-left py-2">Attendance</th>
                        <th className="text-left py-2">Emotion</th>
                        <th className="text-left py-2">Focus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="py-2">Ahmed Mohamed</td>
                        <td className="py-2"><Badge className="bg-green-500">95%</Badge></td>
                        <td className="py-2"><Badge className="bg-blue-500">Happy</Badge></td>
                        <td className="py-2">92%</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2">Sarah Johnson</td>
                        <td className="py-2"><Badge className="bg-green-500">98%</Badge></td>
                        <td className="py-2"><Badge className="bg-purple-500">Focused</Badge></td>
                        <td className="py-2">88%</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2">Mohammed Ali</td>
                        <td className="py-2"><Badge className="bg-yellow-500">85%</Badge></td>
                        <td className="py-2"><Badge className="bg-yellow-500">Neutral</Badge></td>
                        <td className="py-2">75%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistics & Recent Exports */}
          <div className="space-y-6">
            {/* Export Statistics */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Export Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-500/20 rounded-lg">
                  <div className="text-sm text-gray-300 mb-1">Total Files</div>
                  <div className="text-2xl font-bold text-white">247</div>
                </div>

                <div className="p-4 bg-green-500/20 rounded-lg">
                  <div className="text-sm text-gray-300 mb-1">Data Size</div>
                  <div className="text-2xl font-bold text-white">15.6 GB</div>
                </div>

                <div className="p-4 bg-purple-500/20 rounded-lg">
                  <div className="text-sm text-gray-300 mb-1">Last Export</div>
                  <div className="text-lg font-bold text-white flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    2 hours ago
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Exports */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Recent Exports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentExports.map((export_, index) => (
                    <div key={index} className="p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-medium text-sm">{export_.name}</div>
                          <div className="text-gray-300 text-xs">{export_.date}</div>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-blue-500 text-white mb-1 text-xs">
                            {export_.format}
                          </Badge>
                          <div className="text-gray-400 text-xs">{export_.size}</div>
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

export default ExportData;