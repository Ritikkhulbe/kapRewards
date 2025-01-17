import GenericLayout, {
  GenericLayoutDescription,
  GenericLayoutHeader,
} from "@/app/genericComponents/GenericLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Scoreboard = () => {
  const [sla, setSla] = useState(true);
  const [frt, setFrt] = useState("");
  const [shop, setShop] = useState(false);
  const [flights, setFlights] = useState(false);
  const [food, setFood] = useState(false);
  const [vacation, setVacation] = useState(false);

  const [csat, setCsat] = useState(false);
  return (
    <GenericLayout>
      <GenericLayoutHeader>Configurations</GenericLayoutHeader>
      <GenericLayoutDescription>
        Create and configure rewards to score agents
      </GenericLayoutDescription>
      {/* Table Headers */}
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-col">
          <Card className="p-4 text-textsecondary text-[25px] font-bold mb-2">
            Ticket Rules
            <div className="flex w-full py-2 border-t mt-1">
              <div className="left  w-[100%]">
                <div className="text-[20px] text-textsecondary">Within SLA</div>
                <div className="text-[16px] text-textsecondary-light">
                  Enable to give a point when ticket is resolved within SLA
                </div>
              </div>
              <div className="flex items-center w-[10%]">
                <Switch checked={sla} onCheckedChange={() => setSla(!sla)} />
              </div>
            </div>
            <div className="flex w-full py-2 ">
              <div className="left  w-[80%]">
                <div className="text-[20px] text-textsecondary">
                  First Response Time
                </div>
                <div className="text-[16px] text-textsecondary-light">
                  Enable to give a point when ticket is responded to within(in
                  seconds):
                </div>
              </div>
              <div className="flex items-center w-[30%]">
                <Input value={frt} onChange={(e) => setFrt(e.target.value)} />
              </div>
            </div>
          </Card>
          <Card className="p-4 text-textsecondary text-[25px] font-bold">
            Feedback Rules
            <div className="flex w-full  border-t py-2 mt-1">
              <div className="left  w-[100%]">
                <div className="text-[20px] text-textsecondary">
                  Positive CSAT
                </div>
                <div className="text-[16px] text-textsecondary-light">
                  Enable to give a point when agent receives a positive response
                </div>
              </div>
              <div className="flex items-center w-[10%]">
                <Switch checked={csat} onCheckedChange={() => setCsat(!csat)} />
              </div>
            </div>
          </Card>
        </div>
        <Card className="p-4 text-textsecondary text-[25px] font-bold mb-2">
          Rewards Rules
          <div className="flex w-full py-2  border-t mt-1">
            <div className="left  w-[100%]">
              <div className="text-[20px] text-textsecondary">Shopping</div>
              <div className="text-[16px] text-textsecondary-light">
                Enable for agents to redeem points for shopping
              </div>
            </div>
            <div className="flex items-center w-[10%]">
              <Switch checked={shop} onCheckedChange={() => setShop(!shop)} />
            </div>
          </div>
          <div className="flex w-full py-2  mt-1">
            <div className="left  w-[100%]">
              <div className="text-[20px] text-textsecondary">Flights</div>
              <div className="text-[16px] text-textsecondary-light">
                Enable for agents to redeem points for flights
              </div>
            </div>
            <div className="flex items-center w-[10%]">
              <Switch checked={flights} onCheckedChange={() => setFlights(!flights)} />
            </div>
          </div>
          <div className="flex w-full py-2 mt-1">
            <div className="left  w-[100%]">
              <div className="text-[20px] text-textsecondary">
                Food Vouchers
              </div>
              <div className="text-[16px] text-textsecondary-light">
                Enable for agents to redeem points for food vouchers
              </div>
            </div>
            <div className="flex items-center w-[10%]">
              <Switch checked={food} onCheckedChange={() => setFood(!food)} />
            </div>
          </div>
          <div className="flex w-full py-2 mt-1">
            <div className="left  w-[100%]">
              <div className="text-[20px] text-textsecondary">Vacations</div>
              <div className="text-[16px] text-textsecondary-light">
                Enable for agents to redeem points for full sponsored trips
              </div>
            </div>
            <div className="flex items-center w-[10%]">
              <Switch
                checked={vacation}
                onCheckedChange={() => setVacation(!vacation)}
              />
            </div>
          </div>
        </Card>
      </div>
    </GenericLayout>
  );
};

export default Scoreboard;
