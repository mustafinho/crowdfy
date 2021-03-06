import { NButton } from '../Buttons'

import {
  Container,
  Wrapper,
  FormContent,
  ImageWrapper,
  FormInputImage,
  Form,
  FormShortsFields,
  ShortFieldWrapper,
  FormLabel,
  Image,
  FormInput,
  FormLargeFields,
  LargerFieldsWrapper,
  TextArea,
  TextDescription,
  FormImageLabel,
  TopLine,
  ButtonWrapper,
  Error
} from './CreateCampaign.styles'


export const CreateCampaign = ({ CampaignFields, handleChange, values, submit, captureFile, isSubmiting }) => {

  return (
    <Container>
      <Wrapper>
        <FormContent>
          <ImageWrapper>
            <Image id="coverImage" />
          </ImageWrapper>
          <Form onSubmit={submit} method='POST'>
            {/* The image handler */}
            <FormInputImage
              id="imageInput"
              type="file"
              accept="image/*"
              name="campaignImage"
              onChange={captureFile}
              defaultValue={values.campaignImage}
            />

            <FormImageLabel htmlFor="imageInput">
              <img src="https://img.icons8.com/ios/50/fa314a/add.png" alt="add Cover" />
            </FormImageLabel>

            <TopLine id='campaignTittle'>My campaign</TopLine>
            <FormShortsFields>

              {CampaignFields.map(({ label, type, autoFocus, start, finish, value, placeholder, minimum, customError, name }, index) => (
                <ShortFieldWrapper key={index+4} style={{ gridColumnEnd: finish, gridColumnStart: start }} >
                  <FormLabel key={index +1}>{label}</FormLabel>

                  {/* sets min value to the date input only */}
                  {label === 'deadline' ?
                    <FormInput
                      key={index}
                      type={type}
                      autoFocus={autoFocus}
                      onChange={handleChange(label)}
                      value={value}
                      placeholder={placeholder}
                      required
                      min={minimum()}
                    />
                    :
                    <FormInput
                      key={index}
                      type={type}
                      autoFocus={autoFocus}
                      onChange={handleChange(name)}
                      value={value}
                      placeholder={placeholder}
                      // min={0}
                    required
                    />
                  }
                  {/* if there is a custom error shows up */}
                  {customError && <Error key={index +2}>{customError}</Error>}

                </ShortFieldWrapper>
              ))}

            </FormShortsFields>

            <FormLargeFields>
              <LargerFieldsWrapper>
                <TextDescription onChange={handleChange("shortDescription")}
                  value={values.shortDescription}
                  placeholder="Short Description"
                  type="text"
                  maxLength="220"
                />
                <TextArea placeholder="Write your history" type="text"
                  onChange={handleChange("longDescription")}
                  value={values.longDescription}
                />
              </LargerFieldsWrapper>
            </FormLargeFields>
            <ButtonWrapper>
              <NButton primary={true} type="submit" disabled={isSubmiting} isSubmmiting={isSubmiting}>{isSubmiting ? "Loading... please wait confirmation" : "Create campaign"}</NButton>
            </ButtonWrapper>
          </Form>
        </FormContent>
      </Wrapper>
    </Container>
  )
}
