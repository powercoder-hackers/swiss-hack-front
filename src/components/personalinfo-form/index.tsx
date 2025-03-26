import type React from "react"
import { useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PersonalInfoForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate("/financial-goals")
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="John Doe" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" type="text" placeholder="123 Main St, City, State" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input id="jobTitle" type="text" placeholder="Software Engineer" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" placeholder="30" required min="18" max="100" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="maritalStatus">Marital Status</Label>
                <Select required>
                  <SelectTrigger id="maritalStatus">
                    <SelectValue placeholder="Select marital status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">
                Next
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
