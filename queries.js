export const homepageQuery = `{
  homepage {
    data {
      attributes {
        hero {
          title1,
          title2
        },
        section1 {
          title,
          feature {
            description
          }
        },
        section2,
        section3 {
          title,
          services {
            icon,
            description
          }
        },
        meta {
          type,
          content
        }
      }
    }
  }
}`