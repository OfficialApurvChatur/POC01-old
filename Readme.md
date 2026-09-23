# POC #01 - React Node Setup
Production Grade - Proof of Concept for React & Node Connection

## System Architecture

### 01. High Level Design (HLD)
```mermaid
  sequenceDiagram
    actor User
    participant Frontend
    participant Backend

    User -->> Frontend : ui req
    Frontend -->> Backend : api req
    Backend -->> Frontend : api res
    Frontend -->> User : ui res
```

### 02. Low Level Design (LLD)

#### 02.01. Git Branching & PR Strategies LLD
```mermaid
  sequenceDiagram
    actor Developer
    participant feature/*
    participant develop
    participant test
    participant stage
    participant prod

    Developer -->> develop : switch
    develop -->> feature/* : create
    feature/* -->> feature/* : push
    feature/* -->> develop : merge
    develop -->> test : merge
    test -->> stage : merge
    stage -->> prod : merge
    prod -->> develop : merge
    develop -->> Developer : pull
```

#### 02.02. Project Overview LLD
```mermaid
  flowchart LR
    User(("User"))
    subgraph Testing["Testing"]
      subgraph Frontend["Frontend"]
        React["React"]
      end
      subgraph Backend["Backend"]
        Node["Node"]
      end
    end
    
    User --> Frontend
    Frontend --> Backend
```

#### 02.03. Playwright Connection LLD
```mermaid
  flowchart
    Developer(("Developer"))
    Tester(("Tester"))
    Github["Github Actions"]
    CLI["Command Line Interface"]
    subgraph Testing["Testing"]
      Playwright[""Playwright]
    end
    Frontend["Frontend"]
    Backend["Backend"]

    Developer --> CLI
    Tester --> Github
    
    CLI --> Testing
    Github --> Testing

    Testing --> Frontend
    Testing --> Backend

```

#### 02.04. Environment Connection LLD
```mermaid
  flowchart TB
    User(("User"))
    subgraph Environment["Environment"]
      develop["develop"]
      test["test"]
      stage["stage"]
      prod["prod"]
    end
    subgraph Project["Project"]
      direction TB
      Frontend["Frontend"]
      Backend["Backend"]
      Testing["Testing"]
    end

    User --> develop
    User --> test
    User --> stage
    User --> prod
    develop --> Project
    test --> Project
    stage --> Project
    prod --> Project
```

#### 02.05. Servers & DNS LLD
```mermaid
  flowchart
    User(("User"))
    Domain["Domain"]
    NetlifyDNS["Netlify DNS"]
    NetlifyServer["Netlify Server"]
    RenderDNS["Render DNS"]
    RenderServer["Render "Server]

    User --> Domain
    Domain --> NetlifyDNS
    Domain --> RenderDNS
    RenderDNS --> RenderServer
    NetlifyDNS --> NetlifyServer
```


## Servers & DNS

### Backend
- Development
  - Local: [http://localhost:8001](http://localhost:8001)
  - Live: [https://react-node-v01-backend-develop.onrender.com](https://react-node-v01-backend-develop.onrender.com)
- Testing
  - Local: [http://localhost:8002](http://localhost:8000)
  - Live: [https://react-node-v01-backend-test.onrender.com](https://react-node-v01-backend-test.onrender.com)
- Staging
  - Local: [http://localhost:8003](http://localhost:8000)
  - Live: [https://react-node-v01-backend-stage.onrender.com](https://react-node-v01-backend-stage.onrender.com)
- Production
  - Local: [http://localhost:8004](http://localhost:8000)
  - Live: [https://react-node-v01-backend-prod.onrender.com](https://react-node-v01-backend-prod.onrender.com)

### Frontend
- Development
  - Local: [http://localhost:3001](http://localhost:3001)
  - Live: [https://react-node-v01-frontend-develop.netlify.app](https://react-node-v01-frontend-develop.netlify.app)
- Testing
  - Local: [http://localhost:3002](http://localhost:3002)
  - Live: [https://react-node-v01-frontend-test.netlify.app](https://react-node-v01-frontend-test.netlify.app)
- Staging
  - Local: [http://localhost:3003](http://localhost:3003)
  - Live: [https://react-node-v01-frontend-stage.netlify.app](https://react-node-v01-frontend-stage.netlify.app)
- Production
  - Local: [http://localhost:3004](http://localhost:3004)
  - Live: [https://react-node-v01-frontend-prod.netlify.app](https://react-node-v01-frontend-prod.netlify.app)

### Testing
- Local Report: [http://localhost:9323](http://localhost:9323)
- Live Report: []()
