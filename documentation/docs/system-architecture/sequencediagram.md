**Sequence Diagram**
```mermaid
sequenceDiagram
actor Person
autonumber
Person->>Website: Request site index
Website->>IanAPI: get_syllabi()
IanAPI->>Website: Return all syllabi
Website->>Person: Render site index
Person->>Website: Click a link to a syllabus ID 1
Website->>IanAPI: get_syllabus(1)
IanAPI->>Website: Return syllabus
Website->>Person: Render syllabus page
Person->>Website: Click "Download ICS"
Website->>IanAPI: get_syllabus(1)
IanAPI->>Website: Return syllabus ID 1
Website->>Person: createCalendar()

```
