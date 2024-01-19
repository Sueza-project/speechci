# Install jenkins using docker-compose: 
`docker-compose -f docker-compose-jenkins.yaml up --build -d`

# Configure jenkins auto-trigger for Github
[Youtube Tutorial](https://www.youtube.com/watch?v=ZiHMsEKklKQ&t=272s)

# [configure CI/CD using github actions](https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp)

# install nodesjs on jenkins docker: 
run `docker exec -it --privileged docker_image_name bash`
run `curl -fsSL https://deb.nodesource.com/setup_12.x | bash -`
run `apt-get install -y nodejs`
