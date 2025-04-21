# Coding Assignment 14

## Building Dockerfile

1. Create empty folder and clone repo from GitHub using

   `git@github.com:avcxmgs/portfolio.git`

2. Start Docker Desktop

3. Build and tag the Docker image:

   `docker build . -t "santos_margareth_coding_assignment14"`

4. Build the image and start the container:

   `docker run -t -i -p 5575:5575 --name=santos_margareth_coding_assignment14 santos_margareth_coding_assignment14`

5. Check on a browser that the web application is running:
   http://localhost:5575/

6. Stop the container:
   q + enter
