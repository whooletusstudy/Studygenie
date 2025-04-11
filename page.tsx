'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Youtube, FileText } from "lucide-react";

export default function StudyGenie() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAsk = () => {
    setAnswer("This is a smart AI-generated answer to your question: " + question);
  };

  const handleLogin = () => {
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-indigo-100 p-6">
        <Card className="w-full max-w-sm bg-white/90 shadow-xl rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center text-pink-600 font-serif">Welcome to StudyGenie</h2>
          <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button className="bg-pink-500 hover:bg-pink-600 text-white w-full" onClick={handleLogin}>Login / Sign Up</Button>
        </Card>
      </main>
    );
  }

  return (
    <main className="p-4 md:p-8 max-w-5xl mx-auto bg-gradient-to-br from-pink-100 via-rose-100 to-indigo-100 min-h-screen text-gray-800">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-5xl font-extrabold text-center font-serif text-pink-600 drop-shadow">StudyGenie</h1>
        <Button className="bg-red-400 text-white" onClick={handleLogout}>Logout</Button>
      </div>
      <Tabs defaultValue="assistant">
        <TabsList className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 mb-4 bg-white/80 shadow rounded-xl p-2">
          <TabsTrigger value="assistant">AI Assistant</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
          <TabsTrigger value="mock">Mock Test</TabsTrigger>
          <TabsTrigger value="doubts">Doubt Solver</TabsTrigger>
          <TabsTrigger value="summarizer">Video/PDF Summarizer</TabsTrigger>
        </TabsList>

        <TabsContent value="assistant">
          <Card className="bg-white/90 shadow-xl rounded-xl">
            <CardContent className="p-6">
              <Input placeholder="Ask a question..." value={question} onChange={(e) => setQuestion(e.target.value)} />
              <Button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white" onClick={handleAsk}>Ask Genie</Button>
              {answer && <p className="mt-6 bg-rose-100 p-4 rounded-lg shadow-inner font-medium">{answer}</p>}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes">
          <Card className="bg-white/90 shadow-xl rounded-xl">
            <CardContent className="p-6 space-y-4">
              <Input placeholder="Subject" />
              <Textarea placeholder="Type your notes here..." />
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">Save Note</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule">
          <Card className="bg-white/90 shadow-xl rounded-xl">
            <CardContent className="p-6 space-y-4">
              <p className="font-medium">Generate a custom study schedule</p>
              <Input placeholder="Subjects you want to focus on" />
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">Generate Schedule</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="flashcards">
          <Card className="bg-white/90 shadow-xl rounded-xl">
            <CardContent className="p-6 space-y-4">
              <Input placeholder="Topic" />
              <Textarea placeholder="Enter key points or questions" />
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">Create Flashcards</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mock">
          <Card className="bg-white/90 shadow-xl rounded-xl">
            <CardContent className="p-6 space-y-4">
              <Input placeholder="Subject" />
              <Input placeholder="Difficulty (easy, medium, hard)" />
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">Generate Test</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="doubts">
          <Card className="bg-white/90 shadow-xl rounded-xl">
            <CardContent className="p-6 space-y-4">
              <p className="font-medium">Upload an image of your question:</p>
              <Button className="bg-pink-400 hover:bg-pink-500 text-white"><Upload className="mr-2" />Upload Image</Button>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">Get Solution</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="summarizer">
          <Card className="bg-white/90 shadow-xl rounded-xl">
            <CardContent className="p-6 space-y-4">
              <Input placeholder="Paste YouTube video link here" />
              <Button className="bg-pink-400 hover:bg-pink-500 text-white"><Youtube className="mr-2" />Summarize Video</Button>
              <p className="text-center font-medium">or</p>
              <Button className="bg-pink-400 hover:bg-pink-500 text-white"><FileText className="mr-2" />Upload PDF</Button>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">Summarize PDF</Button>
              <Textarea className="mt-4" placeholder="Summarized Notes will appear here..." rows={6} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}