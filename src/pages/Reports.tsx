
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
import { toast } from "sonner";

const Reports = () => {
  const reportTypes = [
    {
      id: "1",
      title: "Payment Summary",
      description: "Summary of all payments by project, status, and date range",
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
    {
      id: "2",
      title: "Project Expenditure",
      description: "Detailed breakdown of expenses by project",
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
    {
      id: "3",
      title: "Vendor Payment History",
      description: "Payment history for each vendor",
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
    {
      id: "4",
      title: "Material Transportation",
      description: "Status of material shipments and deliveries",
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
    {
      id: "5",
      title: "Budget vs Actual",
      description: "Comparison of budgeted vs actual expenditure",
      icon: <FileText className="h-8 w-8 text-primary" />,
    },
    {
      id: "6",
      title: "Payment Due Report",
      description: "List of upcoming payment dues",
      icon: <FileText className="h-8 w-8 text-primary" />,
    }
  ];

  const handleGenerateReport = (reportId: string) => {
    toast.success("Report generation started. It will be available for download shortly.");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Reports</h1>
        <p className="text-muted-foreground">Generate and download various reports</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reportTypes.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle>{report.title}</CardTitle>
                {report.icon}
              </div>
              <CardDescription>{report.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleGenerateReport(report.id)}
              >
                <Download className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reports;
