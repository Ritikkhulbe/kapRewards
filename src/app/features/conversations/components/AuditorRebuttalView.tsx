import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const AuditorRebuttalView = () => {
  return (
    <Card className="w-full border rounded-lg shadow-sm">
      {/* Main Content */}
      <CardContent className="bg-yellow-50 p-4">
        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-[120px_1fr] gap-y-2 text-sm text-gray-700">
          {/* Rebutted By */}
          <div className="font-semibold">Rebutted by:</div>
          <div>Elody</div>

          {/* Rebutted On */}
          <div className="font-semibold">Rebutted on:</div>
          <div>January 24, 2024</div>

          {/* Expected Score */}
          <div className="font-semibold">Expected score:</div>
          <div>95%</div>

          {/* Comment */}
          <div className="font-semibold">Comment:</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </div>

          {/* File Attachment */}
          <div></div>
          <div className="mt-2 flex items-center gap-2 p-2 border rounded-md bg-white shadow-sm w-1/5">
            <FileText className="w-6 h-6 text-red-600" />
            <div className="text-sm text-gray-700">
              <p className="font-medium">chatetiquettes.pdf</p>
              <span className="text-gray-500 text-xs">563.42 KB</span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto">
              <Download className="w-5 h-5 text-blue-500" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuditorRebuttalView;
