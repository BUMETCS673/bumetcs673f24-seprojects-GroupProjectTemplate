import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "./misc/Headings.js";
import { RestaurantsApi } from "../Api";
import { PrimaryButton } from "./misc/Buttons.js";
import { PrimaryLink } from "./header.js";
import { ContentWithPaddingXl } from "./misc/Layouts.js";
import loveIllustrationImageSrc from "../images/love-illustration.svg";
import { ReactComponent as StarIconBase } from "../images/star-icon.svg";
import { ReactComponent as ArrowLeftIcon } from "../images/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../images/arrow-right-3-icon.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto md:mr-8`; // Add margin to the right
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-8 md:mt-0`,
  props.textOnLeft ? tw`md:mr-8 lg:mr-16 md:order-first` : tw`md:ml-8 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8`;

const Heading = tw(SectionHeading)`text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4`

const Statistics = tw.div`mt-6 lg:mt-8 xl:mt-16 flex flex-wrap`
const Statistic = tw.div`text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left`
const Value = tw.div`font-bold text-primary-500`
const Key = tw.div`font-medium text-gray-700`

const Row = tw.div`flex flex-col md:flex-row justify-between items-center`;
const ColumnReview = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumnReview = tw(Column)`md:w-5/12 xl:w-6/12 flex-shrink-0 relative`;
const TextColumnReview = styled(Column)(props => [
  tw`md:w-7/12 xl:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:pr-12 lg:pr-16 md:order-first` : tw`md:pl-12 lg:pl-16 md:order-last`
]);

const ImageReview = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const HeadingReview = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const DescriptionReview = tw.p`mt-6 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const TestimonialSlider = styled(Slider)`
  ${tw`w-full mt-10 text-center md:text-left`}
  .slick-track {
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;

const Testimonial = tw.div`outline-none h-full flex! flex-col`;
const StarsContainer = styled.div``;
const StarIcon = tw(StarIconBase)`inline-block w-5 h-5 text-orange-400 fill-current mr-1 last:mr-0`;
const TestimonialHeading = tw.div`mt-4 text-xl font-bold`;
const Quote = tw.blockquote`mt-4 mb-8 sm:mb-10 leading-relaxed font-medium text-gray-700`;

const CustomerInfoAndControlsContainer = tw.div`mt-auto flex justify-between items-center flex-col sm:flex-row`;

const CustomerInfo = tw.div`flex flex-col sm:flex-row items-center justify-center lg:justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-16 h-16 sm:w-20 sm:h-20`;
const CustomerTextInfo = tw.div`text-center md:text-left sm:ml-6 mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-bold text-xl`;
const CustomerTitle = tw.p`font-medium text-secondary-100`;

const Controls = styled.div`
  ${tw`flex mt-8 sm:mt-0`}
  .divider {
    ${tw`my-3 border-r`}
  }
`;
const ControlButton = styled.button`
  ${tw`mx-3 p-4 rounded-full transition duration-300 bg-gray-200 hover:bg-gray-300 text-primary-500 hover:text-primary-700 focus:outline-none focus:shadow-outline`}
  svg {
    ${tw`w-4 h-4 stroke-3`}
  }
`;

export default ({textOnLeft = false}) => {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        // Fetch restaurants
        const fetchRestaurants = async () => {
        try {
            console.log(id)
            const data = await RestaurantsApi.getRestaurantDetails(id);
            setRestaurant(data);
        } catch (error) {
            console.error("Failed to fetch restaurants:", error);
        }
        };
    
        fetchRestaurants();
    }, []);

    console.log(restaurant)
    // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
    //Change the statistics variable as you like, add or delete objects
    const statistics = [
        {
        key: "Overall Rating",
        value: restaurant.overall_rating,
        },
        {
        key: "Vegan Rating",
        value: restaurant.vegan_rating,
        },
        {
        key: "Gluten Free Rating",
        value: restaurant.gluten_free_rating,
        },
        {
        key: "Vegetarian Rating",
        value: restaurant.vegetarian_rating,
        }
    ]

    const apiKey = "AIzaSyCLyIS3AOvylY8MUExSSFUNfruG4f6I1vQ"
    const imageSrc = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurant.photo_ref}&key=${apiKey}`;



    const imageSrcReview = loveIllustrationImageSrc;
    const imageRounded = true;
    const imageBorder = false;
    const imageShadow = false;
    const subheading = "Testimonials";
    const heading = "Our Clients Love Us.";
    const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.";
    const testimonials = [
        {
        stars: 5,
        profileImageSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
        heading: "Amazing User Experience",
        quote:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        customerName: "Charlotte Hale",
        customerTitle: "CEO, Delos Inc."
        },
        {
        stars: 5,
        profileImageSrc:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
        heading: "Love the Developer Experience and Design Principles !",
        quote:
            "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        customerName: "Adam Cuppy",
        customerTitle: "Founder, EventsNYC"
        }
    ];

    const [sliderRef, setSliderRef] = useState(null);

    return (
        <Container>
        <TwoColumn>
            <ImageColumn>
            <Image imageSrc={imageSrc} />
            </ImageColumn>
            <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
                <Heading>{restaurant.name}</Heading>
                <Description>
                    {restaurant.address}
                    <br></br><br></br>
                    <PrimaryLink href={restaurant.google_url}>View on Google</PrimaryLink>
                    
                </Description>
                <Statistics>
                {statistics.map((statistic, index) => (
                <Statistic key={index}>
                    <Value>{statistic.value}</Value>
                    <Key>{statistic.key}</Key>
                </Statistic>
                ))}
                </Statistics>
            </TextContent>
            </TextColumn>
        </TwoColumn>
        <ContentWithPaddingXl>
            <Row>
            <ImageColumn>
                <Image src={imageSrcReview} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
            </ImageColumn>
            <TextColumn textOnLeft={textOnLeft}>
                <Subheading>{subheading}</Subheading>
                <Heading>{heading}</Heading>
                <Description>{description}</Description>
                <TestimonialSlider arrows={false} ref={setSliderRef}>
                {testimonials.map((testimonial, index) => (
                    <Testimonial key={index}>
                    <StarsContainer>
                        {Array.from({ length: testimonial.stars }).map((_,indexIcon) => (
                        <StarIcon key={indexIcon} />
                        ))}
                    </StarsContainer>
                    <TestimonialHeading>{testimonial.heading}</TestimonialHeading>
                    <Quote>{testimonial.quote}</Quote>
                    <CustomerInfoAndControlsContainer>
                        <CustomerInfo>
                        <CustomerProfilePicture src={testimonial.profileImageSrc} alt={testimonial.customerName} />
                        <CustomerTextInfo>
                            <CustomerName>{testimonial.customerName}</CustomerName>
                            <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                        </CustomerTextInfo>
                        </CustomerInfo>
                        <Controls>
                        <ControlButton onClick={sliderRef?.slickPrev}>
                            <ArrowLeftIcon />
                        </ControlButton>
                        <div className="divider" />
                        <ControlButton onClick={sliderRef?.slickNext}>
                            <ArrowRightIcon />
                        </ControlButton>
                        </Controls>
                    </CustomerInfoAndControlsContainer>
                    </Testimonial>
                ))}
                </TestimonialSlider>
            </TextColumn>
            </Row>
        </ContentWithPaddingXl>
        </Container>
    );
};
