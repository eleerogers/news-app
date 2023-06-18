import { NewsArticle } from '@/models/NewsArticles';
import {FormEvent, useState} from 'react'
import { Form, Button } from 'react-bootstrap';

const SearchNewsPage = () => {
  const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null)
  const [searchResultsLoading, setSearchResultsLoading] = useState(false)
  const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {

  }

  return ( 
    <main>
      <h1>Search News</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="search-input">
          <Form.Label>Search Query</Form.Label>
          <Form.Control
            name="searchQuery"
            placeholder="E.g. politics, sports, ..."
          />
        </Form.Group>
        <Button type="submit" className="mb-3" disabled={searchResultsLoading}>
          Search
        </Button>
      </Form>
    </main>
   );
}
 
export default SearchNewsPage;