# Use this script to start the API rest tests
echo "Build image?"
select yn in "Yes" "No"; do
    case $yn in
    Yes)
        docker build . -t change-this-image-name --no-cache
        break
        ;;
    No) break ;;
    esac
done
