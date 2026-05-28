'use client';
import { useDocsSearch } from 'fumadocs-core/search/client';
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
} from 'fumadocs-ui/components/dialog/search';
import { useParams, usePathname } from 'next/navigation';

export default function DefaultSearchDialog(props: SharedProps) {
  const pathname = usePathname();

  const params = useParams();
  const section = pathname.split('/').at(1) || '/docs';
  const api = `/api/search/${section}`;

  const { search, setSearch, query } = useDocsSearch({
    type: 'fetch',
    api,
    locale: params.lang as string,
  });

  return (
    <SearchDialog search={search} onSearchChange={setSearch} isLoading={query.isLoading} {...props}>
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={query.data !== 'empty' ? query.data : null} />
      </SearchDialogContent>
    </SearchDialog>
  );
}
