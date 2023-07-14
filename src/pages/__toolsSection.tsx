import React, { useRef } from "react";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";

type ToolsDataType = {
  id: string;
  category: string;
  toolsName: string[];
  toolsImagePaths: string[];
};

export default function ToolsSection({ toolsStack }: ToolsDataType[] | any) {
  const tabMenuRefList = useRef<HTMLAnchorElement[]>([]);
  const tabContentRefList = useRef<HTMLDivElement[]>([]);

  const handleTabMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tabMenuIndex: number
  ) => {
    e.preventDefault();

    const tabContent = tabContentRefList.current;

    // Check that tab content is isn't empty
    if (tabContent.length !== 0) {
      for (let i = 0; i < tabContent.length; i++) {
        // Skip null iteration to prevent error
        if (tabContent[i] === null) continue;

        if (tabMenuIndex === i) {
          if (tabContent[i].classList.contains("hidden")) {
            tabContent[i].classList.remove("hidden");
            tabContent[i].classList.add("block");
          }
        } else {
          // Hide the rest of the content
          tabContent[i].classList.add("hidden");
        }
      }
    }
  };

  return (
    <section
      id="work-tools-section"
      className="px-10 h-auto pb-10 pt-10 sm:pt-20 mb-40"
    >
      <div className="text-white text-center mb-10">
        <span className="text-gray-800 text-md font-bold text-center block mb-5">
          Our Tools
        </span>
        <h3 className="text-3xl font-bold mb-5 sm:mb-10 custom-text-dark">
          <span className="custom-bg-green-accent custom-text-dark">
            The Technologies{" "}
          </span>
          We Use.
        </h3>
        <p className="max-w-[35rem] mx-auto text-sm font-light custom-text-dark">
          We work with tried and tested technologies that are suited for
          building software products that meet business needs and innovation.
          Our tools include:
        </p>
      </div>

      <div id="tools-category-container" className="tools-tablist flex flex-col items-center">
        <div
          id="tools-menu"
          className="tools-tablist__btn | inline-flex flex-row items-center justify-center mb-5 border-b border-gray-200 border-w-20 pb-2"
          role="tablist"
        >
          {toolsStack.length > 0 &&
            toolsStack.map((stack: ToolsDataType, idx: number) => {
              const category = stack.category;

              return (
                <a
                  href={`#${category.toLowerCase()}-${stack.id}`}
                  className="tools-tablist__item | px-[1rem] py-1 font-semibold block rounded-full"
                  role="tab"
                  key={stack.id}
                  onClick={(e) => handleTabMenuClick(e, idx)}
                  ref={(e: HTMLAnchorElement) => tabMenuRefList.current.push(e)}
                >
                  {category.charAt(0).toUpperCase()}
                  {category.slice(1)}
                </a>
              );
            })}
        </div>

        <div id="tools-content" className="w-full sm:max-w-[40rem]">
          {toolsStack.map((stack: any, idx: number) => {
            return (
              <div
                id={`${stack.category.toLowerCase()}-${stack.id}`}
                className={`tools-tablist__content | flex justify-start flex-wrap bg-gray-100 py-4 px-2 rounded-xl ${
                  idx === 0 ? "block" : "hidden"
                }`}
                ref={(e: HTMLDivElement) => tabContentRefList.current.push(e)}
                key={`${idx + 1}-${stack.id}`}
              >
                {stack.tools.map((tool: any, idx: number) => {
                  let image = getImage(tool.logo);

                  return (
                    <div className="flex flex-col items-start sm:items-center mr-10 mb-3" key={`${idx}-${stack.id}`}>
                      {image != undefined ? (
                        <GatsbyImage image={image} alt={tool.name} className="tool-image" />
                      ) : (
                        <img src={getSrc(tool.logo)} alt={tool.name} className="tool-image" />
                      )}
                      <div className="tool-name | text-sm font-semibold">{tool.name}</div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
