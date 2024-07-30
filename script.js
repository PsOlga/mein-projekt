import { eventsStore } from "./scripts/data.js";
import { createDomElement, formatDate} from "./scripts/utils.js";


const Eventses= document.querySelector(".filters-events")
const eventTypeSelect = document.getElementById("event-type")
const eventDistanceSelect = document.getElementById("event-distance")
const eventCategorySelect = document.getElementById("event-category")


function createEvent(arr) {
  arr.forEach((eventElement) => {
    const eventItem = createDomElement({ tag: "a", className: "events-link", href: "#" })
    Eventses.append(eventItem)
    const eventsImages = createDomElement({ tag: "div", className: "events-images-alls" })
    eventItem.append(eventsImages)
    const eventImage = createDomElement({ tag: "img", className: "events-images-alls", src: eventElement.image })
    eventsImages.append(eventImage)
    const eventDetails = createDomElement({ tag: "div", className: "events-all-details" })
    eventItem.append(eventDetails)
    const eventsDate = createDomElement({ tag: "p", className: "events-all-date", textValue: formatDate(eventElement.date) })
    const eventsHeader = createDomElement({ tag: "h3", className: "events-haeder-text", textValue: eventElement.title })
    const eventsCategory = createDomElement({ tag: "p", className: "events-all-category", textValue: eventElement.category })
    eventDetails.append(eventsDate,eventsHeader , eventsCategory);
    if (eventElement.type === "online") {
      const onlineEventImage = createDomElement({
        tag: "img",
        className: "events-all-online",
        src: "./Event-grid/camera.svg.svg",
        alt: "online event",
      })
      eventDetails.append(onlineEventImage)
    }
    if (eventElement.attendsInfo) {
      const eventsInfo = createDomElement({
        tag: "p",
        className: "events-info-container-attendsInfo",
        textValue:`${eventElement.attendsInfo} attendsInfo`,
      })
      eventDetails.append(eventsInfo)
    }
  })
}
function clearEvents() {
  while (Eventses.firstChild) {
    Eventses.removeChild(Eventses.firstChild);
  }
}
function filterEvents(arr) {
  const selectedType = eventTypeSelect.value !== "any" && eventTypeSelect.value
  const selectedDistance = eventDistanceSelect.value !== "any" && eventDistanceSelect.value
  const selectedCategory = eventCategorySelect.value !== "any" && eventCategorySelect.value
  let filteredArr = arr
  if (selectedType) {
    filteredArr = filteredArr.filter((element) => element.type === selectedType)
  }
  if (selectedDistance) {
    filteredArr = filteredArr.filter((element) => String(element.distance) === selectedDistance)
  }
  if (selectedCategory) {
    filteredArr = filteredArr.filter((element) => element.category === selectedCategory)
  }
  clearEvents()
  createEvent(filteredArr)
}
eventTypeSelect.addEventListener("change", () => {filterEvents(eventsStore)})
eventDistanceSelect.addEventListener("change", () => {filterEvents(eventsStore)})
eventCategorySelect.addEventListener("change", () => {filterEvents(eventsStore)})
createEvent(eventsStore)

