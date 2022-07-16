# Use this script to start the API rest tests
echo "Run in background?"
select yn in "Yes" "No"; do
    case $yn in
    Yes)
        docker run -d --rm -p 6060:6060 change-this-image-name
        break
        ;;
    No)
        docker run -it --rm -p 6060:6060 change-this-image-name
        break
        ;;
    esac
done
