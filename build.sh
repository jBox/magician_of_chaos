docker rm -f moc-container
docker rmi moc:onbuild
docker build -t moc:onbuild .