"use client";

import { useState } from "react";
import { Check, HelpCircle } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const pricingTiers = [
  { pageviews: "10K", price: 8 },
  { pageviews: "50K", price: 12 },
  { pageviews: "100K", price: 16 },
  { pageviews: "500K", price: 24 },
  { pageviews: "1M", price: 36 },
];

export default function InteractivePricing() {
  const [sliderValue, setSliderValue] = useState(2);
  const [isYearly, setIsYearly] = useState(false);

  const currentTier = pricingTiers[sliderValue];
  const discount = 0.25; // 25% discount for yearly billing
  const finalPrice = isYearly
    ? currentTier.price * (1 - discount) * 12
    : currentTier.price;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Simple, traffic-based pricing
        </h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xl font-semibold text-gray-600">
              {currentTier.pageviews} Pageviews
            </p>
            <p className="text-4xl font-bold flex items-center">
              ${finalPrice.toFixed(2)}
              <span className="text-lg text-gray-500 ml-2">
                / {isYearly ? "year" : "month"}
              </span>
            </p>
          </div>
          <Slider
            value={[sliderValue]}
            onValueChange={(value) => setSliderValue(value[0])}
            max={4}
            step={1}
            className="w-full"
          />
          <div className="flex items-center justify-center space-x-4">
            <span className="text-sm">Monthly Billing</span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-green-500"
            />
            <span className="text-sm">Yearly Billing</span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="w-4 h-4 text-gray-400" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Save 25% with yearly billing</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <hr />
          <ul className="space-y-2">
            {["Unlimited websites", "100% data ownership", "Email reports"].map(
              (feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  {feature}
                </li>
              ),
            )}
          </ul>
          <Button className="w-full">Start my trial</Button>
        </div>
      </div>
    </div>
  );
}
