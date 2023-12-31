<a name="readme-top"></a>
<h1>Table of Contents</h1>

- [👋 Rails-React-App](#-Rails-React-app)
  - [🧰 Tech Stack  ](#-tech-stack--)
  - [✨ Key Features  ](#-key-features--)
  - [📘 Getting Started  ](#-getting-started--)
    - [📋 Prerequisites](#-prerequisites)
    - [📂 Setup](#-setup)
    - [📥 Installation](#-installation)
    - [💾 Database](#-database)
    - [📦 Build](#-build)
    - [💻 Usage](#-usage)
  - [👨‍🚀 Author  ](#-author--)
  - [🎯 Future Features  ](#-future-features--)
  - [🤝 Contribution  ](#-contribution--)
  - [💖 Show Your Support  ](#-show-your-support--)
  - [🙏 Acknowledgements](#-acknowledgements)
  - [📜 License ](#-license-)
</details>

# 👋 Rails-React App

The Rails-React App is a straightforward web application designed to showcase the seamless integration between a Ruby on Rails back-end and a React front-end. It generates random greetings and serves as an educational resource for gaining insights into the connection between these two powerful technologies.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🧰 Tech Stack  <a name="tech-stack"></a>

- Front end: React
- State management: Redux Toolkit
- Back end: Ruby on Rails
- Database: PostgreSQL

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ✨ Key Features  <a name="key-features"></a>

- Random Greetings: The app generates a random greeting each time it is loaded
- React and Redux: The front end is built using React, and API calls are made using Redux
- API: The back end is built using Ruby on Rails, creating an API endpoint to generate a random greeting message.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📘 Getting Started  <a name="getting-started"></a>

To run this project locally, you'll need to follow these steps.

### 📋 Prerequisites

Make sure you have the following installed on your machine:
- [Ruby 3.1.3 or higher](https://www.ruby-lang.org/en/)
- [Rails 7.0.4 or higher](https://rubyonrails.org/)
- [PostgreSQL 15.2 or higher](https://www.postgresql.org/)

### 📂 Setup

Clone this repository to your desired foler.

```sh
cd my-project
git clone git@github.com:Besufekad-HAZ/hello-rails-react.git
```

### 📥 Installation

Install the required gems with:

```sh
bundle install
```

Install node dependencies with:

```sh
npm install
```

### 💾 Database

Create the databases and run migrations with:

```sh
rails db:create
rails db:migrate
```

To load the sample data, run:

```sh
rails db:seed
```

### 📦 Build

Build the front-end assets with:

```sh
npm run build
```

You can also set it to *watch mode* which automatically build after every changes. To start the *watch mode*, use:

```sh
npm run watch
```

### 💻 Usage

After building the assets, run the development server with the following command:

```sh
rails server
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👨‍🚀 Author  <a name="author"></a>

I am always looking for ways to improve my project. If you have any suggestions or ideas, I would love to hear from you.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🎯 Future Features  <a name="future-features"></a>

- [ ] Add more endpoints

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🤝 Contribution  <a name="contribution"></a>

Contributions, issues, and feature requests are welcome!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 💖 Show Your Support  <a name="support"></a>

If you like this project, please consider giving it a ⭐.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🙏 Acknowledgements

I would like to thank all code reviewers for making this project better.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 📜 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
