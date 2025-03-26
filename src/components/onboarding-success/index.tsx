import type React from "react"
import { useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function OnboardingSuccess({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const navigate = useNavigate()

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center">
            <CheckCircle2 className="h-16 w-16 text-gray-600" />
          </div>
          <CardTitle className="text-2xl mt-4">You're all set!</CardTitle>
          <CardDescription className="text-lg mt-2">
            Based on your financial goals, we've prepared personalized recommendations
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Our private banking team recommends starting with a high-yield savings account 
              and a diversified investment portfolio tailored to your home ownership goals. 
              We'll reach out within 24 hours to discuss your personalized financial plan.
            </p>
            <Button 
              onClick={() => navigate("/dashboard")} 
              className="w-full mt-6"
            >
              Go to Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
