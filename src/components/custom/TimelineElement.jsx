import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Badge } from "@/components/ui/badge";

const TimelineElement = ({ props }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { id, date, position, description, company, location, icon, tech } =
    props;
  return (
    <VerticalTimelineElement
      key={id}
      className="vertical-timeline-element--work"
      contentStyle={{ background: "transparent", boxShadow: "none", textAlign: "center" }}
      date={date}
      iconStyle={{ background: "var(--primary)", color: "var(--accent)" }}
      icon={<FontAwesomeIcon icon={icon} />}
    >
      <Collapsible
        className="rounded-md data-[state=open]:bg-muted"
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <CollapsibleTrigger asChild>
          <Button className="group w-full p-4 h-fit">
            <div className="flex flex-col l items-start">
              <h1 className="text-lg font-extrabold text-wrap">{position}</h1>
              <span className="text-md font-semibold">{company}</span>
              <span className="text-xs">{location}</span>
            </div>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="ml-auto group-data-[state=open]:rotate-180 transition-transform duration-300"
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className=" gap-4 p-4 text-sm text-left">
          <div className="flex flex-wrap gap-2">
            {tech.map((t, index) => {
              return (
                <Badge variant="secondary" key={index}>
                  {t}
                </Badge>
              );
            })}
          </div>
          <h6 className="text-sm mt-2">{description}</h6>
        </CollapsibleContent>
      </Collapsible>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
