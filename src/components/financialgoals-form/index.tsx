import type React from "react"
import { useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function FinancialGoalsForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate("/onboarding-success")
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Financial Goals</CardTitle>
          <CardDescription>Help us understand your financial objectives</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-4">
                <Label htmlFor="goals">What are your financial goals?</Label>
                <Textarea 
                  id="goals" 
                  placeholder="I want to save money to afford buying a house..." 
                  required 
                  className="min-h-[200px] text-base"
                />
              </div>
              <div className="mt-4">
                <Button type="submit" className="w-full">
                  Get Recommendation
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
